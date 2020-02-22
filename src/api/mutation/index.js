import gql from "graphql-tag";

//ADD EVENTS FUNCTION
export const ADD_RELIGIOUS_EVENT = gql`
  mutation newEventReligious($input: EventReligious) {
    addEventReligious(input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const ADD_SPORT_EVENT = gql `
  mutation newEventSport($input: EventSport) {
    addEventSport(input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const ADD_POLITIC_EVENT = gql `
  mutation newEventPolitic($input: EventPolitic) {
    addEventPolitic(input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const ADD_SOCIETY_EVENT = gql`
  mutation newEventSociety($input: EventSociety) {
    addEventSociety(input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const ADD_ENTERPRISE_EVENT = gql`
  mutation newEventEnterprise($input: EventEnterprise) {
    addEventEnterprise(input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const ADD_PARTY_EVENT = gql`
  mutation newEventParty($input: EventParty) {
    addEventParty(input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

//DELETE EVENTS FUNCTION
export const DEL_RELIGIOUS_EVENT = gql`
  mutation deleteEventReligious($id: ID!) {
    delEventReligious(id: $id) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const DEL_POLITIC_EVENT = gql `
  mutation deleteEventPolitic($id: ID!) {
    delEventPolitic(id: $id) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const DEL_SPORT_EVENT = gql `
  mutation deleteEventSport($id: ID!) {
    delEventSport(id: $id) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const DEL_SOCIETY_EVENT = gql`
  mutation deleteEventSociety($id: ID!) {
    delEventSociety(id: $id) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const DEL_ENTERPRISE_EVENT = gql`
  mutation deleteEventEnterprise($id: ID!) {
    delEventEnterprise(id: $id) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const DEL_PARTY_EVENT = gql`
  mutation deleteEventParty($id: ID!) {
    delEventParty(id: $id) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

//UPDATE EVENTS FUNCTION

export const UP_RELIGIOUS_EVENT = gql`
  mutation upEventReligious($id: ID!, $input: EventReligious) {
    updateEventReligious(id: $id, input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const UP_SPORT_EVENT = gql `
  mutation upEventSport($id: ID!, $input: EventSport) {
    updateEventSport(id: $id, input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const UP_POLITIC_EVENT = gql `
  mutation upEventPolitic($id: ID!, $input: EventPolitic) {
    updateEventPolitic(id: $id, input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const UP_SOCIETY_EVENT = gql`
  mutation upEventSociety($id: ID!, $input: EventSociety) {
    updateEventSociety(id: $id, input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const UP_ENTERPRISE_EVENT = gql`
  mutation upEventEnterprise($id: ID!, $input: EventEnterprise) {
    updateEventEnterprise(id: $id, input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const UP_PARTY_EVENT = gql`
  mutation upEventParty($id: ID!, $input: EventParty) {
    updateEventParty(id: $id, input: $input) {
      title
      place
      hour
      date
      categories
      infoline
      description
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;