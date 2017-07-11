# Steps to Deploy iOS Application

Please read the guidelines Apple provides here first:

[https://developer.apple.com/app-store/review/guidelines/](https://developer.apple.com/app-store/review/guidelines/)

## Scope
This document outlines the deployment for a universal iOS application able to run on iPhone and iPad.

## Verify Requirements
This is a list of required action items needed  to deploy the application.  Depoyable iOS, macOS, and tvOS applications are managed by Apple's iTunes Connect service. 

**Verify Account Info**
1. iTunes Connect requires a yearly paid membership.
1. Frequent User Agreements must be accepted by account owner to continue to use iTunes Connect.

**For all devices, verify these settings:**
1. Application Name
1. Application bundle identifier
1. Provisioning profile
1. Signing certificate
1. App Icon
1. Launch Screen Images

**For iPad**
1. All orientations are enabled
1. Verify app works in split screen mode.

## Setting up a New Application on iTunes Connect
This assumes an Xcode project already exists and is ready to deploy, but no application has been registered yet.

1. [Register a new app/bundle identifier](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW1).  It should match the one in the project.
1. Go to [itunesconnect.apple.com](itunesconnect.apple.com), and add a new app.
1. Set the name, bundle identifier, SKU, and other information to match the project.
1. Set category and subcategory
1. Set Licensing 
1. Set pricing and available regions.

## Deploy Application to iTunes Connect
1. Verify the project scheme's archive step is set to "Release" in the scheme editor.
1. Verify the signing certificate is set to the App Store version.
1. Select "Generic iOS Device"
1. [Create an archive](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/TestingYouriOSApp/TestingYouriOSApp.html#//apple_ref/doc/uid/TP40012582-CH8-SW4)
1. [Upload the archive to iTunes Connect](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/UploadingYourApptoiTunesConnect/UploadingYourApptoiTunesConnect.html#//apple_ref/doc/uid/TP40012582-CH36-SW2)

## Submit to App Store
After uploading the application archive to iTunes Connect, you'll be able to submit it for review.  Apple will likely run automated and manual tests to verify it against their guideline rules.  It can take a few hours to a couple days for the submission to succeed or fail.  An email should be provided with any relevant information.
[Learn more](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/SubmittingYourApp/SubmittingYourApp.html#//apple_ref/doc/uid/TP40012582-CH9-SW1)

## Submit to TestFlight
Apple has an official beta program called TestFlight.  This program is designed specificly for production ready beta testing.  The rules state it can not be used for in-development beta testing.  The app must follow the same guidelines as the app store.  It also states that beta testers must not be compensated in anyway.

You can submit an app archive to TestFlight from iTunes Connect.
[Learn more](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/DistributingYourAppUsingTestFlight/DistributingYourAppUsingTestFlight.html#//apple_ref/doc/uid/TP40012582-CH37-SW1)

## Adhoc Deployment
Using an adhoc signing certificate, you can create an app archive able to be manually installed on registered devices.  [Learn more](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/TestingYouriOSApp/TestingYouriOSApp.html#//apple_ref/doc/uid/TP40012582-CH8-SW21)