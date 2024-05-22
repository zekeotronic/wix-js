# Wix Events JS

This library provides a simple way to handle events in a Wix site using the Wix Events API v3.
[API Documentation](https://dev.wix.com/docs/rest/business-solutions/events/events-v3/introduction)

## Installation

```bash
npm i wix-events-js
```

## Usage

Wix Events requires an API key and a Wix site ID to be initialized.

[Wix API Keys](https://dev.wix.com/docs/rest/articles/getting-started/api-keys)

```JavaScript
import WixEvents from "wix-events-js";

const wixEvents = new WixEvents(apiKey, wixSiteID);
```

## Event Object

Properties

- `id` - `string` The event ID
- `location` - `object` Event Location `maxLength 50`
  - `name` - `string` Location name. This value is displayed instead of the address when the location is defined as TBD by setting the `locationTbd` property to `true`.
  - `type` - `string` 3 enum supported values
    - `VENUE` - Event is on-site at a specific physical location..
    - `ONLINE` - Event is online, such as a virtual video conference.
    - `UNKNOWN_LOCATION` - The event location is to be determined.
  - `address` - `object` Exact location address
    - `country` - `string` 2-letter country code in ISO-3166 alpha-2 format.
    - `subdivision` - `string` Code for a subdivision (such as state, prefecture, or province) in ISO 3166-2.
    - `city` - `string` City name.
    - `postalCode` - `string` Zip or Postal code.
