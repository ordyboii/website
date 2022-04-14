/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Session {}
  interface Locals {}
  interface Platform {}
}

interface Project {
  slug: string;
  data: ProjectData;
  content: string;
}

interface ProjectData {
  title: string;
  summary: string;
  date: string;
  image: string;
  imageAlt: string;
  client: string;
  role: string;
}