"use client";
export interface sectionType {
  title: string;
  desc: string;
}

export type benefitsType = {
  title: string;
  desc: string[];
};

export interface technologyType extends sectionType {
  img: string;
}
export interface involvedType extends sectionType {
  img: string;
}
export interface communityType extends sectionType {
  img: string;
}
export interface teamType extends sectionType {
  img: string;
}

export type menuType = {
  title: string;
  url: string;
};
export type Direction = "up" | "right" | "down" | "left";
