import gql from "graphql-tag";

const EVENT_RELIGIOUS_QUERY = gql`
  {
    eventReligious {
      id
      title
      place
      hour
      date
      categories
      cover {
        filename
      }
    }
  }
`;

const EVENT_SPORT_QUERY = gql `
  {
    eventSport {
      id
      title
      place
      hour
      date
      categories
      cover {
        filename
      }
    }
  }
`;

const EVENT_POLITIC_QUERY = gql `
  {
    eventPolitics {
      id
      title
      place
      hour
      date
      categories
      cover {
        filename
      }
    }
  }
`;

const EVENT_SOCIETY_QUERY = gql`
  {
    eventSociety {
      id
      title
      place
      hour
      date
      categories
      cover {
        filename
      }
    }
  }
`;

const EVENT_ENTERPRISE_QUERY = gql`
  {
    eventEnterprise {
      id
      title
      place
      hour
      date
      categories
      cover {
        filename
      }
    }
  }
`;
const EVENT_PARTY_QUERY = gql`
  {
    eventParty {
      id
      title
      place
      hour
      date
      categories
      cover {
        filename
      }
    }
  }
`;

export {
  EVENT_SOCIETY_QUERY,
  EVENT_RELIGIOUS_QUERY,
  EVENT_ENTERPRISE_QUERY,
  EVENT_PARTY_QUERY,
  EVENT_SPORT_QUERY,
  EVENT_POLITIC_QUERY,
};
