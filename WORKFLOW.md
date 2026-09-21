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

### Task 1 Screenshot
![Task 1 Proof](screenshots/Task1.jpg)

### Task 2 Screenshot
![Task 2 Proof](screenshots/Task2.jpg)

### Task 3 Screenshot
![Task 3 Proof](screenshots/Task3.jpg)

### Task 4 Screenshot
![Task 4 Proof](screenshots/Task4.jpg)

### Task 5 Screenshot
![Task 5 Proof](screenshots/Task5.jpg)

### Task 6 Screenshot
![Task 6 Proof](screenshots/Task6.jpg)