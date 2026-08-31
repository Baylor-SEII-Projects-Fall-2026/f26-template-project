# Contributing to the Project

Welcome! This guide will walk you through using Git best practices when developing your project. If you're new to Git, don't worry—I'll do my best to explain everything step by step.

Note that all of the commands listed in this file use the Git CLI (command line). If you prefer using a GUI Git client, such as the one built into VSCode or IntelliJ, feel free to do so!

## Table of Contents
- [Getting Started](#getting-started)
- [Branch Workflow](#branch-workflow)
- [Writing Good Commit Messages](#writing-good-commit-messages)
- [Pull Requests](#pull-requests)
- [Code Review](#code-review)

## Getting Started

Before making changes, make sure you have the latest code:

```bash
git pull origin main
```

This downloads any changes other team members have made to the main branch.

## Branch Workflow

We use **trunk-based development**, which means:
- The `main` branch always contains working, deployable code
- All new work happens in **feature branches**, which are created off of `main`
- Feature branches are short-lived and merged back to `main` quickly
- Frequent integration with `main` is encouraged to avoid large merge conflicts

A **feature branch** should focus on a single feature or bug fix, and no more. For example, if you're adding user authentication, your branch might be named `feat/add-user-authentication`. Avoid bundling multiple unrelated changes in a single branch. This both keeps the branch focused and makes code review/merging easier.

Importantly, feature branches should be focused on the *feature* that they implement, not who is implementing them. You should not have a "personal branch" that you work off of - separate your work into distinct individual branches instead.

### Creating a Feature Branch

When you start working on something new:

1. Make sure you're on the main branch and it's up to date:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new branch with a descriptive name:
   ```bash
   git checkout -b your-branch-name
   ```

### Branch Naming Conventions

Use clear, descriptive names that explain what the branch does:

- `feat/add-user-login` - for adding a new feature
- `fix/event-search-bug` - for fixing a bug
- `docs/update-readme` - for documentation updates
- `refactor/database-queries` - for code improvements

**Avoid vague names like:**
- `my-branch`
- `test`
- `fixes`
- `branch1`

Branch names should be all lowercase and use hyphens to separate words and include the "category" of the change before a slash. For example:

- `addUserLogin` => `feat/add-user-login`
- `event-search-fix` => `fix/event-search-bug`
- `UpdateReadme` => `docs/update-readme`
- `matthewsBranch` => `refactor/database-queries`

***DO NOT** use your name in branch names - using the "feature branch" strategy, all branches should be named based on the feature or fix they implement, not who is implementing it.*

## Writing Good Commit Messages

A commit message explains **what** changed and **why**. This helps your team (and future you) understand the project's history.

### The Format

```
Brief summary of changes (50 characters or less)

Optional detailed explanation of what changed and why.
You can write multiple paragraphs if needed.
```

### Examples

**Good commit messages:**

```
Add user authentication to events API

Implemented JWT-based authentication to allow users to
securely log in and manage their tickets and events.
```

```
Fix event search returning duplicate results

The search query was joining tables incorrectly, causing
duplicate entries. Updated the SQL to use DISTINCT.
```

```
Update README with setup instructions

Added step-by-step guide for running the project locally
to help new contributors get started faster.
```

**Bad commit messages:**

```
fixed stuff
```

```
changes
```

```
asdf
```

```
final version
```

### Tips for Good Commit Messages

1. **Use the imperative mood**: Write "Add feature" not "Added feature" or "Adds feature"
2. **Capitalize the first letter**: Start with a capital letter
3. **No period at the end**: Don't end the summary line with a period
4. **Be specific**: Instead of "fix bug", say "Fix login redirect after password reset"
5. **Commit related changes together**: Don't bundle unrelated changes in one commit
6. **Commit often**: Make small, logical commits rather than one huge commit

### Making a Commit

After you've made changes to your code:

```bash
# See what files changed
git status

# Add specific files you want to commit
git add path/to/file1.java path/to/file2.tsx

# Or add all changed files (be careful with this!)
git add .

# Create the commit with a message
git commit -m "Add event rating feature"
```

## Pull Requests

A Pull Request (PR) is how you propose merging your changes into the main branch. It allows others to review your code before it becomes part of the project.

### Before Creating a PR

1. **Make sure your code works**: Test your changes locally
2. **Update from main**: Merge any new changes from main into your branch
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch-name
   git merge main
   ```
3. **Push your branch**: Upload your commits to the remote repository
   ```bash
   git push origin your-branch-name
   ```

### Creating a PR

1. Go to the repository on GitHub
2. Click "New Pull Request" or "Create Pull Request"
3. Select your branch to merge into `main`
4. Write a clear title and description

### PR Title and Description

**Good PR title:**
- "Add user authentication system"
- "Fix event search bug with special characters"
- "Update Docker configuration for local development"

**PR description should include:**
- What changes you made
- Why you made them
- How to test the changes
- Any related issue/ticket numbers

**Example PR description:**

```markdown
## What Changed
Added a rating system for events, allowing attendees to rate events from 1-5 stars.

## Why
Attendees requested the ability to rate events so they can track which events they
enjoyed and share recommendations with others.

## How to Test
1. Start the application
2. Navigate to any event detail page
3. Click on the star rating component
4. Verify the rating is saved and displayed correctly

Fixes #42
```

## Code Review

Code review helps catch bugs, share knowledge, and maintain code quality. **Everyone** should participate in reviewing PRs. Every PR should be reviewed by **at least one other team member** before being merged.

### When Reviewing Code

1. **Be kind and constructive**: Remember there's a person behind the code
2. **Ask questions**: Instead of "This is wrong", try "Could we handle the null case here?"
3. **Explain your reasoning**: Help others learn by explaining why you suggest changes
4. **Approve when ready**: If the code looks good, approve it! Don't let perfect be the enemy of good

### Review Checklist

- [ ] Does the code do what the PR description says?
- [ ] Are there any obvious bugs or edge cases not handled?
- [ ] Is the code readable and understandable?
- [ ] Are there tests for new functionality?
- [ ] Does it follow the project's coding style?
- [ ] Is the commit history clean and logical?

### Responding to Review Feedback

When someone reviews your PR:

1. **Thank them**: Appreciate the time they took to review
2. **Ask for clarification**: If you don't understand feedback, ask
3. **Make requested changes**: Push new commits to the same branch
4. **Respond to comments**: Let reviewers know you've addressed their feedback
5. **Don't take it personally**: Code review is about the code, not you

Ultimately, remember that the goal of PR reviews is **better code**. Constructive feedback helps everyone improve and ensures the project maintains high quality.

### After Approval

Once your PR is approved:

1. **Merge the PR**: Click the merge button (or ask a maintainer to merge)
2. **Delete the branch**: Click the "delete branch" button in GitHub to keep your repo clean
3. **Update your local main**: Pull the latest changes
   ```bash
   git checkout main
   git pull origin main
   ```

## Quick Reference

```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b add-new-feature

# Make changes, then commit
git add .
git commit -m "Add descriptive commit message"

# Push to remote
git push origin add-new-feature

# After PR is merged, clean up
git checkout main
git pull origin main
git branch -d add-new-feature
```

## Questions?

If you're stuck or unsure about something, that's completely normal! Ask your team members or mentors for help. Learning Git takes practice, and everyone was a beginner once.

Happy coding!
