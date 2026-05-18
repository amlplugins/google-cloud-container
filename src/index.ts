/**
 * @amlplugins/google-cloud-container
 *
 * Thin namespaced re-export of the native @google-cloud/container SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Kubernetes Engine.
 */

import * as _sdk from "@google-cloud/container";
export * from "@google-cloud/container";
export { _sdk as sdk };
export default _sdk;
