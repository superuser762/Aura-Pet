# Evolution Stage Logic Fix - TODO

## Completed Tasks
- [x] Create `src/evolutionStage.ts` with centralized evolution stages and appearance mappings
- [x] Update `src/store/slices/petSlice.ts` to import `EvolutionStage` from the new file
- [x] Update `src/components/PetScene.tsx` to import `getPetAppearance` and `PetAppearance` from the new file
- [x] Update `src/components/PetSceneSimple.tsx` to import `getPetAppearance` and `PetAppearance` from the new file

## Summary
Fixed the logic inconsistency where evolution stages in the Redux store didn't match the visual appearances in the components. Centralized the evolution logic in `evolutionStage.ts` to ensure consistency across the app.
