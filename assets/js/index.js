import { initMenu } from "./components/header";

import { utils } from "./utils";
export function runAfterDomLoad() {
    initMenu();

    utils();
}
