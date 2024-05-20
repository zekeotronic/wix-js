import axios from "axios";

class WixEvents {
  /**
   * @param {string} apiKey Wix API Key
   * @param {string} siteId Wix Site ID
   */
  constructor(apiKey, siteId) {
    this.apiKey = apiKey;
    this.siteId = siteId;
    this.DEFAULTS = {
      queryEvents: {
        query: {
          paging: {
            limit: 100,
            offset: 0
          },
          filter: {
            status: "UPCOMING"
          },
          sort: [
            {fieldName: "createdDate", order: "DESC"}
          ],
          fields: ["DETAILS", "TEXTS", "REGISTRATION", "URLS", "FORM", "DASHBOARD", "FEED", "ONLINE_CONFERENCING_SESSION", "SEO_SETTINGS", "AGENDA", "CATEGORIES", "CUSTOMIZABLE_TICKETS", "UNKNOWN_REQUESTED_FIELD"],
          includeDrafts: false
        }
      }
    }
  }

  /**
   * Query events
   * @param {object} query Query parameters
   * @returns {Promise<object[]>} List of events
   */
  async queryEvents(queryObject = this.DEFAULTS.queryEvents) {
    let data = JSON.stringify(queryObject);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://www.wixapis.com/events/v3/events/query',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.apiKey}`,
        'wix-site-id': `${this.siteId}`
      },
      data: data
    };
    try {
      let response = await axios.request(config);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default WixEvents;