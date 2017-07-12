# Steps to Deploy Android Application

Please read the launch checklist Google provides here first:

[https://developer.android.com/distribute/best-practices/launch/launch-checklist.html](https://developer.android.com/distribute/best-practices/launch/launch-checklist.html)

## Scope
This document outlines the deployment for an Android application on the Google Play Store.

## Verify Requirements
This is a list of required action items needed  to deploy the application.

**Verify Account Info**
1. The Google Play Console has a one-time $25 registeration fee.

**Build release checklist:**
1. Application Name
1. [Set a package name](https://developer.android.com/guide/topics/manifest/manifest-element.html#package)
1. [Providing signing certificate](https://developer.android.com/studio/publish/app-signing.html)
1. [App Icon](https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html)
1. Disable debugging / logging functionality

## Build Application for Release
This is assuming this is an Android Studio project.

1. Change the build variant to Release from Build->Select Build Variant.
1. The run Build APK to generate a new artifact.
    - Android Studio uses gradle, so you my also run ```./gradlew assembleRelease``` from the command line.
1. The Google Play Store accepts and promotes the uploading of multiple APKs if required to support the many different devices in the market.

## Uploading a New Application on Google Play Console

1. From the Play Console, select "Create Application".  Fill out all required information such as the title, name, and default language.
1. Setup a store listing, content rating, and distrobution model.
1. Next go to the App release page, select Manage, then "Create release".
1. A wizard will guide you through the upload process of your APKs.

[Learn more](https://support.google.com/googleplay/android-developer/answer/113469?hl=en)

## Alpha and Beta testing
The Google Play Store has an Alpha and Beta program.  It allows developers to distribute their APKs to an alpha or beta channel. These channels can be open or closed. Testers can then be invited to download the APK to their phones through the store. Testers are required to have a gmail account.

[Learn more](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en)

## Adhoc Distribution
Android APKs can be distributed outside the store.  Android's default web browser conveniently generates a download button if it detects an APK within a webpage or in an email.

The caveat to manually distributing an APK is that the signing certificate can't be validated with Google, so it's determined to be from an "Unknown source".  Any testers willing to download the APK must opt-in to allow apps from unknown sources in their phone's settings.  This is a security risk.

APKs are not tied to particular devices.  This can allow a tester to inadvertently redistribute the app to others. The common tactic requires permission to access the phone number of the device, then test it against your own server's whitelist.  There is also a similar problem with play store apps on rooted devices.