import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { siteSettings } from "./siteSettings";
import { aboutPage } from "./aboutPage";
import { processPage } from "./processPage";
import { teamMember } from "./teamMember";
import { portableText } from "./shared/portableText";

export const schemaTypes: SchemaTypeDefinition[] = [
  project,
  siteSettings,
  aboutPage,
  processPage,
  teamMember,
  portableText,
];
