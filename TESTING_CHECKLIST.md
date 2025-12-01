# 🧪 Aura-Pet Complete Testing Checklist

## Testing Session: [Date/Time]
**Tester:** User
**Platform:** Android/iOS Device (Expo Go)
**App Version:** 1.0.0

---

## ✅ Test Results

### 1. **App Launch & Initial Load**
- [ ] App launches without crashes
- [ ] Loading screen appears (if applicable)
- [ ] Dashboard screen loads successfully
- [ ] No error messages on startup
- [ ] Status bar is visible and styled correctly (light)

**Notes:**
_[User will provide feedback]_

---

### 2. **Dashboard Screen - Visual Elements**
- [ ] Title "AuraPet" displays correctly
- [ ] Subtitle "Your evolving aura companion" is visible
- [ ] Pet scene renders with animated pet
- [ ] Pet has visible aura glow effect
- [ ] Pet emoji/sprite is visible (should be ✨ for initial stage)
- [ ] Mood tag displays pet name and mood (e.g., "Aura · HAPPY")
- [ ] All 4 stat cards display correctly:
  - [ ] Energy stat card
  - [ ] Hunger stat card
  - [ ] Affection stat card
  - [ ] Cleanliness stat card
- [ ] Progress bars show correct fill levels
- [ ] Navigation buttons are visible (Care, Evolution, Chat, Settings)

**Notes:**
_[User will provide feedback]_

---

### 3. **Pet Animation Tests**
- [ ] Pet floats up and down smoothly
- [ ] Pet rotates gently (subtle rotation)
- [ ] Tap on pet triggers bounce animation
- [ ] Tap on pet increases affection (check stat card)
- [ ] Aura glow is visible and matches mood color
- [ ] No animation stuttering or lag

**Initial Pet Stats to Record:**
- Energy: ___
- Hunger: ___
- Affection: ___
- Cleanliness: ___
- Mood: ___
- Aura Color: ___

**Notes:**
_[User will provide feedback]_

---

### 4. **Navigation - Care Screen**
- [ ] Tap "Care" button navigates to Care screen
- [ ] Care screen title shows "Care for [Pet Name]"
- [ ] Subtitle explains actions
- [ ] All 4 action cards are visible:
  - [ ] Feed - "Give a glowing snack"
  - [ ] Play - "Play a quick game"
  - [ ] Clean - "Aura bath time"
  - [ ] Rest - "Let them recharge"
- [ ] "Back to Pet" button is visible
- [ ] Dark theme is consistent

**Notes:**
_[User will provide feedback]_

---

### 5. **Care Actions - Stat Changes**

#### Test: Feed Action
- [ ] Tap "Feed" button
- [ ] Return to Dashboard (tap "Back to Pet")
- [ ] Verify stat changes:
  - [ ] Hunger decreased (should go down ~40)
  - [ ] Energy increased slightly (~10)
  - [ ] Affection increased slightly (~5)
- [ ] Progress bars updated correctly

**Stats After Feeding:**
- Energy: ___
- Hunger: ___
- Affection: ___
- Cleanliness: ___

#### Test: Play Action
- [ ] Navigate back to Care screen
- [ ] Tap "Play" button
- [ ] Return to Dashboard
- [ ] Verify stat changes:
  - [ ] Energy decreased (~15)
  - [ ] Affection increased (~10)
  - [ ] Cleanliness decreased slightly (~5)

**Stats After Playing:**
- Energy: ___
- Hunger: ___
- Affection: ___
- Cleanliness: ___

#### Test: Clean Action
- [ ] Navigate back to Care screen
- [ ] Tap "Clean" button
- [ ] Return to Dashboard
- [ ] Verify stat changes:
  - [ ] Cleanliness increased significantly (~40)
  - [ ] Affection increased slightly (~3)

**Stats After Cleaning:**
- Energy: ___
- Hunger: ___
- Affection: ___
- Cleanliness: ___

#### Test: Rest Action
- [ ] Navigate back to Care screen
- [ ] Tap "Rest" button
- [ ] Return to Dashboard
- [ ] Verify stat changes:
  - [ ] Energy increased significantly (~25)

**Stats After Resting:**
- Energy: ___
- Hunger: ___
- Affection: ___
- Cleanliness: ___

**Notes:**
_[User will provide feedback]_

---

### 6. **Mood & Aura Color Changes**

#### Test: Happy Mood (Balanced Stats)
- [ ] Keep all stats balanced (50-80 range)
- [ ] Mood should show "HAPPY"
- [ ] Aura color should be lavender/purple (#B794F4)

#### Test: Sad Mood (High Hunger or Low Cleanliness)
- [ ] Let hunger increase above 75 OR cleanliness drop below 30
- [ ] Mood should change to "SAD"
- [ ] Aura color should change to reddish (#F97373)

#### Test: Tired Mood (Low Energy)
- [ ] Let energy drop below 25
- [ ] Mood should change to "TIRED"
- [ ] Aura color should change to blue (#60A5FA)

#### Test: Excited Mood (High Affection)
- [ ] Increase affection above 70 (pet multiple times)
- [ ] Mood should change to "EXCITED"
- [ ] Aura color should change to gold (#FDE047)

**Mood Test Results:**
- Happy mood works: [ ]
- Sad mood works: [ ]
- Tired mood works: [ ]
- Excited mood works: [ ]
- Aura colors change correctly: [ ]

**Notes:**
_[User will provide feedback]_

---

### 7. **Time-Based Stat Decay**
- [ ] Note current stats
- [ ] Wait 30 seconds (= 15 game minutes)
- [ ] Check if stats changed:
  - [ ] Hunger increased slightly
  - [ ] Energy decreased slightly
  - [ ] Cleanliness decreased slightly
- [ ] Wait another 30 seconds
- [ ] Verify continued decay

**Stats Before Waiting:**
- Energy: ___
- Hunger: ___
- Cleanliness: ___

**Stats After 30 seconds:**
- Energy: ___
- Hunger: ___
- Cleanliness: ___

**Stats After 60 seconds:**
- Energy: ___
- Hunger: ___
- Cleanliness: ___

**Notes:**
_[User will provide feedback]_

---

### 8. **XP & Evolution System**

#### Current XP Level
- [ ] Note current XP: ___
- [ ] Note current evolution stage: ___

#### Gain XP Through Interactions
- [ ] Perform 5 care actions (any combination)
- [ ] Each action should grant +2 XP
- [ ] Expected XP gain: +10
- [ ] New XP: ___

#### Evolution Stages (Test if possible)
- [ ] Sparkling Seed (0-25 XP) - ✨ Yellow
- [ ] Baby Glow (25-60 XP) - 🌱 Green
- [ ] Little Spirit (60-100 XP)
- [ ] Auraling (100-150 XP)
- [ ] Lumifox (150-200 XP)
- [ ] Elder Spirit (200+ XP) - Purple

**Evolution Test:**
- [ ] Perform enough actions to reach next stage
- [ ] Verify pet appearance changes (emoji, size, color)
- [ ] Verify evolution stage name updates

**Notes:**
_[User will provide feedback]_

---

### 9. **Navigation - Other Screens**

#### Evolution Screen
- [ ] Tap "Evolution" button from Dashboard
- [ ] Screen loads (currently placeholder)
- [ ] Can navigate back to Dashboard

#### Chat Screen
- [ ] Tap "Chat" button from Dashboard
- [ ] Screen loads with placeholder text
- [ ] Can navigate back to Dashboard

#### Settings Screen
- [ ] Tap "Settings" button from Dashboard
- [ ] Screen loads (currently placeholder)
- [ ] Can navigate back to Dashboard

**Notes:**
_[User will provide feedback]_

---

### 10. **Performance & Stability**

#### Animation Performance
- [ ] Animations run smoothly (60 FPS)
- [ ] No stuttering or lag
- [ ] Transitions between screens are smooth
- [ ] No frame drops during interactions

#### Memory & Battery
- [ ] App doesn't cause device to heat up
- [ ] No excessive battery drain
- [ ] App remains responsive after extended use

#### Stability
- [ ] No crashes during testing
- [ ] No error messages or warnings
- [ ] App recovers gracefully from background
- [ ] Stats persist when navigating between screens

**Notes:**
_[User will provide feedback]_

---

### 11. **Background Behavior**

#### Test App Background/Foreground
- [ ] Note current stats
- [ ] Put app in background (home button)
- [ ] Wait 30 seconds
- [ ] Return to app
- [ ] Verify stats did NOT change (ticker should pause)
- [ ] Verify app resumes normally

**Notes:**
_[User will provide feedback]_

---

### 12. **UI/UX Quality**

#### Visual Design
- [ ] Dark theme is consistent throughout
- [ ] Text is readable (good contrast)
- [ ] Buttons are clearly tappable
- [ ] Spacing and padding look good
- [ ] No visual glitches or overlapping elements

#### User Experience
- [ ] Navigation is intuitive
- [ ] Feedback is immediate (tap responses)
- [ ] Stats are easy to understand
- [ ] Progress bars clearly show values
- [ ] Overall experience is enjoyable

**Notes:**
_[User will provide feedback]_

---

### 13. **Edge Cases & Bugs**

#### Stat Boundaries
- [ ] Stats don't go below 0
- [ ] Stats don't go above 100
- [ ] Negative values don't appear

#### Rapid Interactions
- [ ] Tap pet rapidly multiple times
- [ ] Navigate between screens quickly
- [ ] Perform multiple care actions in succession
- [ ] App remains stable

#### Known Issues Found
1. _[List any bugs or issues discovered]_
2. _[...]_

**Notes:**
_[User will provide feedback]_

---

## 📊 Overall Test Summary

### ✅ Passed Tests: ___/___
### ❌ Failed Tests: ___/___
### ⚠️ Issues Found: ___

### Critical Issues (Must Fix):
1. _[List critical bugs]_

### Minor Issues (Nice to Fix):
1. _[List minor issues]_

### Suggestions for Improvement:
1. _[User suggestions]_

---

## 🎯 Final Verdict

**App Functionality:** [ ] Working [ ] Partially Working [ ] Not Working

**Concept Validation:** [ ] Proven [ ] Needs Work [ ] Failed

**Ready for Next Phase:** [ ] Yes [ ] No [ ] With Fixes

**Overall Rating:** ___/10

**Comments:**
_[Final thoughts and recommendations]_

---

## 📝 Next Steps Based on Testing

1. _[Action item 1]_
2. _[Action item 2]_
3. _[Action item 3]_

---

**Testing Completed By:** _______________
**Date:** _______________
**Time Spent:** _______________
