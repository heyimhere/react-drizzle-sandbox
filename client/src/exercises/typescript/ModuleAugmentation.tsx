import ExercisePage from '../../components/ExercisePage'

export default function ModuleAugmentation() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 7 — Advanced']}
      title="Module Augmentation"
      difficulty="Advanced"
      description="declare module 'some-pkg' { interface SomeType { newField: string } } merges your declarations with the package's existing types. The classic use: adding req.user to Express.Request after your auth middleware runs. Also: adding a CSS module to Vite's types, extending a window.* global, or augmenting a library's plugin registry."
      whatToBuild="In server/src/typescript/typed-handlers.ts (or a new express.d.ts), augment Express.Request with a user?: { id: number; email: string } field. Show a handler that reads req.user without 'any' or '!'. Then augment the global Window in a client/src/typescript-globals.d.ts with a debug?: { trace: boolean } field. Show client code reading window.debug typed correctly."
      keyConcepts={['declare module', 'declare global', 'interface merging', 'Express.Request augmentation', '.d.ts ambient declarations']}
      workspaceFile="server/src/typescript/typed-handlers.ts"
      workspaceFiles={['client/src/exercises/typescript/ModuleAugmentation.tsx']}
      hints={[
        'For npm packages: declare module "express" { interface Request { user?: User } }. Place in a .d.ts file included by tsconfig (or at the top of an existing file in scope).',
        'For globals: declare global { interface Window { myThing: X } }. Must be inside a module (the file has at least one import/export) or in a .d.ts.',
        'Augmentation only works with interfaces, not type aliases. The library must expose an interface for you to merge into.',
        'Augmentation is global by file inclusion — every file that compiles sees it. Be intentional: do not add fields that are only set in some code paths without making them optional.',
      ]}
    />
  )
}
