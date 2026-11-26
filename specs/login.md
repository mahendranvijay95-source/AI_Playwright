# OrangeHRM BDD Automation Test Plan

## Application Overview

Enterprise BDD and Playwright test plan for the OrangeHRM demo. Covers application discovery, login, dashboard, module navigation, authorization, session handling, security, UI, boundary, and framework architecture.

## Test Scenarios

### 1. Application Overview and Module Inventory

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC_LOGIN_001 / Verify login page discovery

**File:** `src/features/login.feature`

**Steps:**
  1. Launch https://opensource-demo.orangehrmlive.com/web/index.php/auth/login.
    - expect: OrangeHRM login page loads.
    - expect: Username, Password, Login, Forgot your password?, branding, and social links are visible.
    - expect: Version footer is visible.
  2. Inspect page semantics and controls.
    - expect: Username and Password are textbox controls.
    - expect: Login is a button.
    - expect: Password is masked.
    - expect: Login is reachable by keyboard.

#### 1.2. TC_DASH_001 / Verify successful login and dashboard discovery

**File:** `src/features/login.feature`

**Steps:**
  1. Enter Admin and admin123 and submit.
    - expect: URL becomes /web/index.php/dashboard/index.
    - expect: Dashboard heading and authenticated profile are shown.
    - expect: Side navigation is visible.

#### 1.3. TC_DASH_002 / Verify module inventory

**File:** `src/features/login.feature`

**Steps:**
  1. Review side navigation after login.
    - expect: Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, and Buzz are discoverable.
    - expect: Module links have valid module URLs.

#### 1.4. TC_DASH_003 / Verify Dashboard widgets

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect Dashboard after successful login.
    - expect: Time at Work, My Actions, Quick Launch, Buzz Latest Posts, Employees on Leave Today, Employee Distribution by Sub Unit, and Employee Distribution by Location are present.

#### 1.5. TC_DASH_004 / Verify Dashboard navigation via side menu

**File:** `src/features/login.feature`

**Steps:**
  1. Open each visible module link independently.
    - expect: Each module opens or displays an authorization/configuration result consistent with the Admin account.
    - expect: No blank page or uncaught application error occurs.

#### 1.6. TC_DASH_005 / Verify side-menu search

**File:** `src/features/login.feature`

**Steps:**
  1. Enter a module name in the Sidepanel Search field.
    - expect: Matching module navigation is filtered and selectable.
    - expect: Clearing search restores module list.

#### 1.7. TC_DASH_006 / Verify profile menu

**File:** `src/features/login.feature`

**Steps:**
  1. Open the authenticated profile menu.
    - expect: Menu exposes user actions such as About, Support, Change Password, and Logout according to the current application build.
    - expect: Menu is keyboard and pointer accessible.

#### 1.8. TC_DASH_007 / Verify dashboard refresh

**File:** `src/features/login.feature`

**Steps:**
  1. Refresh an authenticated Dashboard.
    - expect: Dashboard remains available and session data stays consistent.
    - expect: No credentials are sent in URL or displayed in the page.

#### 1.9. TC_DASH_008 / Verify Quick Launch actions

**File:** `src/features/login.feature`

**Steps:**
  1. Activate each Quick Launch action.
    - expect: The corresponding Leave or Timesheet workflow opens.
    - expect: No authorization or unexpected network error occurs.

### 2. Login - Positive and UI Validation

**Seed:** `tests/seed.spec.ts`

#### 2.1. TC_LOGIN_002 / Successful Login

**File:** `src/features/login.feature`

**Steps:**
  1. Given user launches the login page.
    - expect: Login page is displayed.
  2. When user enters Admin and admin123 and clicks Login.
    - expect: Dashboard is displayed.

#### 2.2. TC_LOGIN_003 / Submit with Enter in Password

**File:** `src/features/login.feature`

**Steps:**
  1. Enter valid credentials and press Enter in Password.
    - expect: Login form submits once.
    - expect: Dashboard is displayed.

#### 2.3. TC_LOGIN_004 / Submit with Enter in Username

**File:** `src/features/login.feature`

**Steps:**
  1. Enter valid credentials and press Enter in Username.
    - expect: No duplicate submission occurs.
    - expect: Dashboard is displayed or focus advances according to native form behavior.

#### 2.4. TC_LOGIN_005 / Password masking

**File:** `src/features/login.feature`

**Steps:**
  1. Enter admin123 in Password.
    - expect: Characters are masked.
    - expect: Plain password is not visible.

#### 2.5. TC_LOGIN_006 / Username field retained on password failure

**File:** `src/features/login.feature`

**Steps:**
  1. Enter Admin and an incorrect password.
    - expect: Username remains Admin.
    - expect: Password is cleared or masked.
    - expect: Generic login error is shown.

#### 2.6. TC_LOGIN_007 / Login page branding

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect login-page branding and footer.
    - expect: Company branding, OrangeHRM logo, version, and copyright are visible.

#### 2.7. TC_LOGIN_008 / Social links

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect social media links.
    - expect: LinkedIn, Facebook, Twitter/X, and YouTube links are present and point to OrangeHRM destinations or safe external pages.

#### 2.8. TC_LOGIN_009 / Tab keyboard order

**File:** `src/features/login.feature`

**Steps:**
  1. Traverse login controls using Tab and Shift+Tab.
    - expect: Focus follows logical control order.
    - expect: Visible focus indication is present.
    - expect: Controls are operable by keyboard.

#### 2.9. TC_LOGIN_010 / Copy and paste credentials

**File:** `src/features/login.feature`

**Steps:**
  1. Paste Admin and admin123 from clipboard.
    - expect: Values populate once.
    - expect: Valid login succeeds.

#### 2.10. TC_LOGIN_011 / Browser autofill behavior

**File:** `src/features/login.feature`

**Steps:**
  1. Enable a test autofill profile and return to login.
    - expect: Username and Password populate only with explicit test credentials.
    - expect: No credential appears in page URLs or analytics.

#### 2.11. TC_LOGIN_012 / Forgot Password navigation

**File:** `src/features/login.feature`

**Steps:**
  1. Select Forgot your password?.
    - expect: Reset-password page or flow opens.
    - expect: Username entry and reset action are available.
    - expect: Return-to-login control is present.

#### 2.12. TC_LOGIN_013 / Reset flow cancellation

**File:** `src/features/login.feature`

**Steps:**
  1. Open Forgot Password and select Cancel or return to login.
    - expect: No reset is performed.
    - expect: Login page is restored.
    - expect: No credentials are leaked.

#### 2.13. TC_LOGIN_014 / Reset flow empty username

**File:** `src/features/login.feature`

**Steps:**
  1. Open reset flow and submit without a username.
    - expect: Required-field validation is shown.
    - expect: No reset request succeeds.

#### 2.14. TC_LOGIN_015 / Reset flow known username

**File:** `src/features/login.feature`

**Steps:**
  1. Submit Admin to the reset flow using demo-safe test data.
    - expect: A success or confirmation response is shown without disclosing account-sensitive details.
    - expect: Application remains usable.

#### 2.15. TC_LOGIN_016 / Reset flow unknown username

**File:** `src/features/login.feature`

**Steps:**
  1. Submit a nonexistent username to reset flow.
    - expect: Response follows account-enumeration-safe behavior.
    - expect: No account existence is exposed.

### 3. Login - Negative and Boundary

**Seed:** `tests/seed.spec.ts`

#### 3.1. TC_LOGIN_017 / Empty username and password

**File:** `src/features/login.feature`

**Steps:**
  1. Leave both fields empty and click Login.
    - expect: Required-field validation or invalid-login message appears.
    - expect: No dashboard or session is created.

#### 3.2. TC_LOGIN_018 / Empty username

**File:** `src/features/login.feature`

**Steps:**
  1. Enter admin123 and leave Username empty.
    - expect: Username required/invalid-credentials message appears.
    - expect: Login fails.

#### 3.3. TC_LOGIN_019 / Empty password

**File:** `src/features/login.feature`

**Steps:**
  1. Enter Admin and leave Password empty.
    - expect: Password required/invalid-credentials message appears.
    - expect: Login fails.

#### 3.4. TC_LOGIN_020 / Invalid username

**File:** `src/features/login.feature`

**Steps:**
  1. Enter nonexistent-user and admin123.
    - expect: Generic invalid credentials response appears.
    - expect: No account enumeration details are visible.

#### 3.5. TC_LOGIN_021 / Invalid password

**File:** `src/features/login.feature`

**Steps:**
  1. Enter Admin and WrongPassword!
    - expect: Generic invalid credentials response appears.
    - expect: User remains unauthenticated.

#### 3.6. TC_LOGIN_022 / Both credentials invalid

**File:** `src/features/login.feature`

**Steps:**
  1. Enter nonexistent-user and WrongPassword!.
    - expect: Login fails with the same generic credential error.
    - expect: No session is created.

#### 3.7. TC_LOGIN_023 / Username case sensitivity

**File:** `src/features/login.feature`

**Steps:**
  1. Try admin with password admin123.
    - expect: Application result matches documented case policy.
    - expect: No unintended access occurs.

#### 3.8. TC_LOGIN_024 / Password case sensitivity

**File:** `src/features/login.feature`

**Steps:**
  1. Try Admin with Admin123.
    - expect: Login fails.
    - expect: admin123 remains the only accepted provided password.

#### 3.9. TC_LOGIN_025 / Whitespace credentials

**File:** `src/features/login.feature`

**Steps:**
  1. Enter spaces in Username and Password.
    - expect: Login fails safely.
    - expect: Whitespace is not accepted as credentials.

#### 3.10. TC_LOGIN_026 / Leading and trailing spaces

**File:** `src/features/login.feature`

**Steps:**
  1. Try ' Admin ' and ' admin123 '.
    - expect: Login follows an explicit trim policy.
    - expect: No valid credential is accepted with unapproved whitespace.

#### 3.11. TC_LOGIN_027 / One-character inputs

**File:** `src/features/login.feature`

**Steps:**
  1. Submit one-character Username and Password.
    - expect: Login fails without application error.
    - expect: Generic validation is returned.

#### 3.12. TC_LOGIN_028 / Maximum-length username boundary

**File:** `src/features/login.feature`

**Steps:**
  1. Submit a 256-character Username with admin123.
    - expect: Input is rejected or limited safely.
    - expect: No crash or authentication bypass occurs.

#### 3.13. TC_LOGIN_029 / Maximum-length password boundary

**File:** `src/features/login.feature`

**Steps:**
  1. Submit Admin with a 256-character Password.
    - expect: Input is rejected or limited safely.
    - expect: Password remains masked.

#### 3.14. TC_LOGIN_030 / Unicode credentials

**File:** `src/features/login.feature`

**Steps:**
  1. Submit Unicode values in Username and Password.
    - expect: Invalid credentials are handled safely.
    - expect: No encoding corruption occurs.

#### 3.15. TC_LOGIN_031 / Special-character credentials

**File:** `src/features/login.feature`

**Steps:**
  1. Submit values containing punctuation and symbols.
    - expect: Application validates or rejects safely.
    - expect: No unexpected interpretation occurs.

#### 3.16. TC_LOGIN_032 / Repeated submit

**File:** `src/features/login.feature`

**Steps:**
  1. Double-submit invalid credentials rapidly.
    - expect: No duplicate request side effect occurs.
    - expect: Login remains stable and retryable.

### 4. Login - Security and Session

**Seed:** `tests/seed.spec.ts`

#### 4.1. TC_LOGIN_033 / HTML/script injection

**File:** `src/features/login.feature`

**Steps:**
  1. Enter <script>alert(1)</script> in username and password.
    - expect: No script executes.
    - expect: No alert or unsafe markup appears.
    - expect: Login fails safely.

#### 4.2. TC_LOGIN_034 / SQL injection payload

**File:** `src/features/login.feature`

**Steps:**
  1. Submit OR 1=1 or DROP TABLE-style payloads.
    - expect: Login fails.
    - expect: No database error or stack trace is exposed.
    - expect: No bypass occurs.

#### 4.3. TC_LOGIN_035 / Credential exposure in URL

**File:** `src/features/login.feature`

**Steps:**
  1. Complete valid login.
    - expect: Username and password are absent from URL, referrer, browser history, and logs.

#### 4.4. TC_LOGIN_036 / Browser password storage

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect password-manager prompts and browser storage.
    - expect: Any storage is controlled by the browser policy.
    - expect: Application does not persist passwords in local/session storage or DOM attributes.

#### 4.5. TC_LOGIN_037 / Logout session termination

**File:** `src/features/login.feature`

**Steps:**
  1. Login successfully, open profile menu, and select Logout.
    - expect: Login page is displayed.
    - expect: Session is invalidated.
    - expect: Protected pages are inaccessible.

#### 4.6. TC_LOGIN_038 / Back after logout

**File:** `src/features/login.feature`

**Steps:**
  1. Logout, then use browser Back.
    - expect: Cached protected content is not usable.
    - expect: Login or session-expired page is shown.

#### 4.7. TC_LOGIN_039 / Direct protected URL after logout

**File:** `src/features/login.feature`

**Steps:**
  1. Logout and open /dashboard/index directly.
    - expect: User is redirected to login.
    - expect: Protected data is not rendered.

#### 4.8. TC_LOGIN_040 / Concurrent session behavior

**File:** `src/features/login.feature`

**Steps:**
  1. Login in two isolated browser contexts.
    - expect: Application behavior is consistent and documented.
    - expect: Logout in one context does not unexpectedly invalidate an unrelated session unless server policy requires it.

#### 4.9. TC_LOGIN_041 / Session refresh persistence

**File:** `src/features/login.feature`

**Steps:**
  1. Login, refresh Dashboard, and reopen protected module.
    - expect: Session remains authenticated until expiration or server policy ends it.
    - expect: No repeated credential entry is required unexpectedly.

#### 4.10. TC_LOGIN_042 / Session expiration

**File:** `src/features/login.feature`

**Steps:**
  1. Wait for or simulate configured session expiration.
    - expect: Protected request is rejected or redirected safely.
    - expect: Login page or session-expired guidance is shown.

#### 4.11. TC_LOGIN_043 / Token and cookie security attributes

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect authentication cookies during a valid session.
    - expect: Cookies use appropriate Secure, HttpOnly, and SameSite settings when supported.
    - expect: No credentials are exposed in JavaScript-accessible storage.

#### 4.12. TC_LOGIN_044 / Brute-force retry behavior

**File:** `src/features/login.feature`

**Steps:**
  1. Submit repeated invalid credentials.
    - expect: No account lockout assumptions are made.
    - expect: Application remains stable and rate-limit/captcha behavior is documented if present.
    - expect: No sensitive diagnostics are shown.

#### 4.13. TC_LOGIN_045 / Generic authentication error

**File:** `src/features/login.feature`

**Steps:**
  1. Compare invalid-user and invalid-password responses.
    - expect: Messages do not reveal whether username or password is valid.
    - expect: Behavior is consistent across retries.

#### 4.14. TC_LOGIN_046 / Network failure during login

**File:** `src/features/login.feature`

**Steps:**
  1. Intercept login API and return a network/server failure.
    - expect: Application displays a stable recoverable error.
    - expect: No false success or redirect occurs.
    - expect: Retry is possible.

#### 4.15. TC_LOGIN_047 / Slow login response

**File:** `src/features/login.feature`

**Steps:**
  1. Delay login response.
    - expect: User can see a loading state if implemented.
    - expect: Duplicate submissions are prevented.
    - expect: Dashboard appears only after successful response.

### 5. Authorization and Module Navigation

**Seed:** `tests/seed.spec.ts`

#### 5.1. TC_LOGIN_048 / Anonymous protected route

**File:** `src/features/login.feature`

**Steps:**
  1. Open each protected route in an unauthenticated context.
    - expect: Dashboard, Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Directory, Maintenance, Claim, and Buzz are inaccessible.
    - expect: User is redirected to login or denied safely.

#### 5.2. TC_AUTH_001 / Admin module access

**File:** `src/features/login.feature`

**Steps:**
  1. Login as Admin and open Admin.
    - expect: Admin module loads and expected submenus are visible according to demo permissions.

#### 5.3. TC_AUTH_002 / PIM module access

**File:** `src/features/login.feature`

**Steps:**
  1. Login as Admin and open PIM.
    - expect: PIM module loads.
    - expect: Employee search/navigation controls are available.

#### 5.4. TC_AUTH_003 / Leave module access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Leave from the side navigation.
    - expect: Leave module loads without application error.

#### 5.5. TC_AUTH_004 / Time module access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Time from the side navigation.
    - expect: Time module loads without application error.

#### 5.6. TC_AUTH_005 / Recruitment module access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Recruitment from the side navigation.
    - expect: Recruitment module loads without application error.

#### 5.7. TC_AUTH_006 / My Info access

**File:** `src/features/login.feature`

**Steps:**
  1. Open My Info.
    - expect: Current employee profile is available to the authenticated user.

#### 5.8. TC_AUTH_007 / Performance access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Performance.
    - expect: Performance module loads according to demo permissions.

#### 5.9. TC_AUTH_008 / Directory access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Directory.
    - expect: Employee directory loads or authorization result is consistent.

#### 5.10. TC_AUTH_009 / Maintenance access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Maintenance.
    - expect: Maintenance access prompt/module loads according to account permissions.
    - expect: No unrelated employee data is exposed.

#### 5.11. TC_AUTH_010 / Claim access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Claim.
    - expect: Claim module loads according to demo permissions.

#### 5.12. TC_AUTH_011 / Buzz access

**File:** `src/features/login.feature`

**Steps:**
  1. Open Buzz.
    - expect: Buzz social feed loads and read/post controls match demo permissions.

#### 5.13. TC_AUTH_012 / Module navigation back and forward

**File:** `src/features/login.feature`

**Steps:**
  1. Navigate among modules and use browser Back/Forward.
    - expect: Correct module state is restored.
    - expect: No stale authenticated or unauthenticated view appears.

### 6. Dashboard and Cross-Module Business Workflows

**Seed:** `tests/seed.spec.ts`

#### 6.1. TC_DASH_009 / Dashboard quick navigation

**File:** `src/features/login.feature`

**Steps:**
  1. Open each Quick Launch action.
    - expect: Expected Leave or Timesheet page opens.
    - expect: No dead-end or blank page occurs.

#### 6.2. TC_DASH_010 / Pending self review action

**File:** `src/features/login.feature`

**Steps:**
  1. Select the Pending Self Review action.
    - expect: Performance review or pending action page opens.
    - expect: No unrelated action executes.

#### 6.3. TC_DASH_011 / Time at Work state

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect Time at Work after login.
    - expect: Punched status, today hours, and weekly summary are displayed consistently.

#### 6.4. TC_DASH_012 / Dashboard employee distribution

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect Sub Unit and Location charts.
    - expect: Chart labels and list values render.
    - expect: No console or rendering errors occur.

#### 6.5. TC_DASH_013 / Employees on leave state

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect Employees on Leave Today.
    - expect: The demo state is shown accurately, including No Employees are on Leave Today when empty.

#### 6.6. TC_DASH_014 / Buzz latest posts

**File:** `src/features/login.feature`

**Steps:**
  1. Inspect Buzz Latest Posts.
    - expect: Posts show author and timestamp/content when available.
    - expect: Post UI remains readable.

#### 6.7. TC_DASH_015 / Responsive Dashboard

**File:** `src/features/login.feature`

**Steps:**
  1. View Dashboard at desktop, tablet, and mobile viewport widths.
    - expect: Navigation and widgets adapt without overlap.
    - expect: Core controls remain reachable.
