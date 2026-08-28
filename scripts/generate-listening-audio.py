#!/usr/bin/env python3
"""Generate reproducible Japanese listening MP3 assets with Edge TTS."""

from __future__ import annotations

import asyncio
from pathlib import Path

import edge_tts

OUTPUT = Path(__file__).resolve().parents[1] / "public" / "audio" / "listening"
VOICE = "ja-JP-NanamiNeural"
TRACKS = {
    "day-1-slow.mp3": ("あなたは、先生ですか。 はい、そうです。 私は先生です。", "-28%"),
    "day-1-natural.mp3": ("あなたは先生ですか？ はい、そうです。私は先生です。", "+0%"),
    "day-2-slow.mp3": ("はじめまして。 お名前は？ ハイカル・シディックです。 インドネシア人ですか？ はい、そうです。 インドネシア人です。", "-28%"),
    "day-2-natural.mp3": ("はじめまして。お名前は？ ハイカル・シディックです。インドネシア人ですか？ はい、そうです。インドネシア人です。", "+0%"),
}


async def generate() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for filename, (text, rate) in TRACKS.items():
        target = OUTPUT / filename
        await edge_tts.Communicate(text=text, voice=VOICE, rate=rate).save(str(target))
        print(f"generated {target.relative_to(OUTPUT.parents[2])}")


if __name__ == "__main__":
    asyncio.run(generate())
