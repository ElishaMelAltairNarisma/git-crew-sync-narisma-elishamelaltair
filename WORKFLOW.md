# Git Crew Sync Lab Workflow

## Student Information
- **Name:** Narisma, Elisha Mel Altair
- **Repository:** git-crew-sync-narisma-elishamelaltair

---

## Completed Tasks Overview

### Task 1: Setup and Synchronization
- Initialized repository and connected local branches to GitHub.

### Task 2: Feature Branch Work
- Worked on the `feature/overtime-pay` branch and created initial shift tracking functions in `shifts.js`.

### Task 3: Simulating Collaborative Conflicts
- Made updates across two separate working directories (Clone A and Clone B) to simulate real-world team pushes.

### Task 4: Push Rejection and Rebase Resolution
1. Made local commits in Clone A while Clone B pushed new changes to `origin/feature/overtime-pay`.
2. Attempted to push from Clone A, resulting in an expected push rejection (`! [rejected]`).
3. Ran `git fetch origin` to pull remote references.
4. Executed `git rebase origin/feature/overtime-pay` to replay local commits over the remote branch.
5. Resolved merge conflicts in `shifts.js` by removing conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
6. Staged changes using `git add .`, finalized the rebase via `git rebase --continue`, and pushed to GitHub.

---

## Screenshot Proof

![Task 4 Rebase Proof](screenshots/)