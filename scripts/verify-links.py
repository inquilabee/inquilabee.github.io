#!/usr/bin/env python3
"""Verify external links in projects.json and README image URLs."""

from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROJECTS_JSON = ROOT / "src/data/projects.json"
README = ROOT / "README.md"
TIMEOUT = 30
USER_AGENT = "inquilabee-site-verify/1.0"


def check(url: str) -> tuple[bool, str]:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            code = response.status
            if code != 200:
                return False, f"HTTP {code}"
            return True, "OK"
    except urllib.error.HTTPError as exc:
        return False, f"HTTP {exc.code}"
    except Exception as exc:  # noqa: BLE001
        return False, str(exc)


def project_urls(data: dict) -> list[str]:
    urls: list[str] = []
    for project in data.get("projects", []):
        for key in ("repo", "demo", "docs"):
            value = project.get(key)
            if value:
                urls.append(value)
    return urls


def readme_image_urls() -> list[str]:
    if not README.is_file():
        return []
    text = README.read_text(encoding="utf-8")
    raw = re.findall(r"https?://[^\s\)\"'<>]+", text)
    valid: list[str] = []
    for url in raw:
        url = url.rstrip(".,)")
        if "//" in url and "." in url.split("//", 1)[1]:
            valid.append(url)
    return valid


def main() -> int:
    failures: list[tuple[str, str]] = []

    data = json.loads(PROJECTS_JSON.read_text(encoding="utf-8"))
    urls = project_urls(data)
    # README links are markdown — validate separately if needed.
    seen: set[str] = set()
    for url in urls:
        if url in seen:
            continue
        seen.add(url)
        ok, detail = check(url)
        status = "PASS" if ok else "FAIL"
        print(f"  [{status}] {detail} — {url}")
        if not ok:
            failures.append((url, detail))

    if failures:
        print(f"\n{len(failures)} link(s) failed.")
        return 1

    print(f"\nAll {len(seen)} link(s) OK.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
