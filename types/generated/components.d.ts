import type { Schema, Attribute } from '@strapi/strapi';

export interface DestinationDestinationFood extends Schema.Component {
  collectionName: 'components_destination_destination_foods';
  info: {
    displayName: 'Destination Food';
    description: '';
  };
  attributes: {
    Shopitemname: Attribute.String;
    shopitembio: Attribute.String;
    ShopitemThumbnail: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface StateStateFood extends Schema.Component {
  collectionName: 'components_state_state_foods';
  info: {
    displayName: 'StateFood';
    description: '';
  };
  attributes: {
    StateFood: Attribute.String;
  };
}

export interface StateStateTaste extends Schema.Component {
  collectionName: 'components_state_state_tastes';
  info: {
    displayName: 'State_Taste';
    description: '';
  };
  attributes: {
    StateFood: Attribute.String;
  };
}

export interface StateStatelandmark extends Schema.Component {
  collectionName: 'components_state_statelandmarks';
  info: {
    displayName: 'Statelandmark';
    description: '';
  };
  attributes: {
    StateLandmark: Attribute.String;
  };
}

export interface SuggestionsFamousFood extends Schema.Component {
  collectionName: 'components_suggestions_famous_foods';
  info: {
    displayName: 'Famous food';
  };
  attributes: {
    foodName: Attribute.String;
    Foodbio: Attribute.String;
    foodPic: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SuggestionsLocalCab extends Schema.Component {
  collectionName: 'components_suggestions_local_cabs';
  info: {
    displayName: 'LocalCab';
  };
  attributes: {
    Service: Attribute.String;
    Contact: Attribute.String;
    Availability: Attribute.String;
  };
}

export interface SuggestionsWhyTo extends Schema.Component {
  collectionName: 'components_suggestions_why_tos';
  info: {
    displayName: 'WhyTo';
    description: '';
  };
  attributes: {
    WhytoList: Attribute.Text;
    WhyNotTo: Attribute.String;
  };
}

export interface SuggestionsWhynoto extends Schema.Component {
  collectionName: 'components_suggestions_whynotos';
  info: {
    displayName: 'whynoto';
  };
  attributes: {
    Why_not_too: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'destination.destination-food': DestinationDestinationFood;
      'state.state-food': StateStateFood;
      'state.state-taste': StateStateTaste;
      'state.statelandmark': StateStatelandmark;
      'suggestions.famous-food': SuggestionsFamousFood;
      'suggestions.local-cab': SuggestionsLocalCab;
      'suggestions.why-to': SuggestionsWhyTo;
      'suggestions.whynoto': SuggestionsWhynoto;
    }
  }
}
