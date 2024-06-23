"use client";
import { TextGenerateEffect } from "./ui/Text";

const words = ` Hi Guys Self-directed and enthusiastic technology consultant experienced working 
with several successfully funded start-ups. Hand-vetted by FullStack Dev 
`;

export function HeroText() {
  return <TextGenerateEffect words={words} />;
}
