import axios from "../api/axois";

type Cores = {
  core: String;
  flight: Number;
  gridfins: Boolean;
  land_success: Boolean;
  landing_intent: Boolean;
  landing_type: String;
  landing_vehicle: String;
  legs: Boolean;
  reused: Boolean;
};

type Crew = {
  agency: String;
  id: String;
  image: String;
  name: String;
  status: String;
  wikipedia: String;
};

type Fairings = {
  recovered: Boolean;
  recovery_attempt: Boolean;
  reused: Boolean;
  ship: String;
};

export interface LaunchResponse {
  capsules: String[];
  cores: Cores[];
  crew: Crew[];
  date_local: String;
  date_precesion: String;
  date_unix: Number;
  date_utc: String;
  details: String;
  failures: [];
  fairings: {};
  flight_number: Number;
  id: String;
  launchpad: String;
  links: {
    article: String;
    flickr: {
      original: String[];
      small: String[];
    };
    patch: {
      large: String;
      small: String;
    };
    presskit: String;
    reddit: {
      campaign: String;
      launch: String;
      media: String;
      recovery: String;
    };
    webcast: String;
    wikipedia: String;
    youtube_id: String;
  };
  name: String;
  net: Boolean;
  payloads: String[];
  rocket: String;
  ships: [];
  static_fire_date_unix: Number;
  static_fire_date_utc: String;
  success: Boolean;
  tbd: Boolean;
  upcoming: Boolean;
  window: Number;
}

export const getLaunchCrew = async () => {
  const response: LaunchResponse = await axios.get("/launches/latest");
  return response;
};
