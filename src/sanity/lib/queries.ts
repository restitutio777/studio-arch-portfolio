import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    studioName,
    tagline,
    heroImages[] { asset->, alt },
    showreelUrl,
    showreelPoster { asset-> },
    aboutTeaser,
    email,
    phone,
    address,
    socialLinks[] { platform, url },
    footerText
  }
`);

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    tagline,
    category,
    year,
    coverImage { asset->, alt },
  }
`);

export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    tagline,
    category,
    year,
    location,
    coverImage { asset->, alt },
  }
`);

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    tagline,
    category,
    year,
    location,
    client,
    coverImage { asset->, alt },
    images[] { asset->, alt, caption },
    description,
    services,
    "nextProject": *[_type == "project" && order > ^.order] | order(order asc) [0] {
      title,
      slug,
      coverImage { asset->, alt },
      category
    }
  }
`);

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    heroStatement,
    portraitImage { asset->, alt },
    bio,
    philosophy,
    philosophyImage { asset->, alt }
  }
`);

export const PROCESS_PAGE_QUERY = defineQuery(`
  *[_type == "processPage"][0] {
    heroTitle,
    heroDescription,
    steps[] { number, title, description, image { asset->, alt } }
  }
`);

export const TEAM_MEMBERS_QUERY = defineQuery(`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    photo { asset->, alt },
    bio
  }
`);
