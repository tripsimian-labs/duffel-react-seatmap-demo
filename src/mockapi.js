import $ from "jquery";
//note mockoffer slices[].segments[].id needs to = seatMaps segment_id
const mockoffer = {
  updated_at: "2021-08-18T05:06:46.415202Z",
  total_emissions_kg: "598",
  total_currency: "GBP",
  total_amount: "363.52",
  tax_currency: "GBP",
  tax_amount: "196.30",
  slices: [
    {
      segments: [
        {
          passengers: [
            {
              passenger_id: "pas_00009hj8USM7Ncg31cAAA",
              fare_basis_code: "VNCDWSG",
              cabin_class_marketing_name: "Economy",
              cabin_class: "economy",
              baggages: [
                {
                  type: "checked",
                  quantity: 1
                }
              ]
            }
          ],
          origin_terminal: "3",
          origin: {
            type: "airport",
            time_zone: "Asia/Singapore",
            name: "Singapore Changi Airport",
            longitude: 103.985127,
            latitude: 1.356115,
            id: "arp_sin_sg",
            icao_code: "WSSS",
            iata_country_code: "SG",
            iata_code: "SIN",
            iata_city_code: "SIN",
            city_name: "Singapore",
            city: {
              type: "city",
              time_zone: null,
              name: "Singapore",
              longitude: null,
              latitude: null,
              id: "cit_sin_sg",
              icao_code: null,
              iata_country_code: "SG",
              iata_code: "SIN",
              iata_city_code: "SIN",
              city_name: null
            },
            airports: null
          },
          operating_carrier_flight_number: "177",
          operating_carrier: {
            name: "Swiss International Air Lines",
            id: "arl_00009VME7DDSWSIAygCT1z",
            iata_code: "LX"
          },
          marketing_carrier_flight_number: "177",
          marketing_carrier: {
            name: "Swiss International Air Lines",
            id: "arl_00009VME7DDSWSIAygCT1z",
            iata_code: "LX"
          },
          id: "seg_0000A8oTVsOiJ9yVx2A7Vo",
          duration: "PT12H40M",
          distance: "10304.60402",
          destination_terminal: null,
          destination: {
            type: "airport",
            time_zone: "Europe/Zurich",
            name: "Zürich Airport",
            longitude: 8.552323,
            latitude: 47.461458,
            id: "arp_zrh_ch",
            icao_code: "LSZH",
            iata_country_code: "CH",
            iata_code: "ZRH",
            iata_city_code: "ZRH",
            city_name: "Zürich",
            city: null,
            airports: null
          },
          departing_at: "2022-06-03T23:30:00",
          arriving_at: "2022-06-04T06:10:00",
          aircraft: {
            name: "Boeing 777-300ER",
            id: "arc_00009VMF8AhXSSRnQDI6HH",
            iata_code: "77W"
          }
        },
        {
          passengers: [
            {
              passenger_id: "pas_00009hj8USM7Ncg31cAAA",
              fare_basis_code: "VNCDWSG",
              cabin_class_marketing_name: "Economy",
              cabin_class: "economy",
              baggages: [
                {
                  type: "checked",
                  quantity: 1
                }
              ]
            }
          ],
          origin_terminal: null,
          origin: {
            type: "airport",
            time_zone: "Europe/Zurich",
            name: "Zürich Airport",
            longitude: 8.552323,
            latitude: 47.461458,
            id: "arp_zrh_ch",
            icao_code: "LSZH",
            iata_country_code: "CH",
            iata_code: "ZRH",
            iata_city_code: "ZRH",
            city_name: "Zürich",
            city: null,
            airports: null
          },
          operating_carrier_flight_number: "450",
          operating_carrier: {
            name: "Swiss International Air Lines",
            id: "arl_00009VME7DDSWSIAygCT1z",
            iata_code: "LX"
          },
          marketing_carrier_flight_number: "450",
          marketing_carrier: {
            name: "Swiss International Air Lines",
            id: "arl_00009VME7DDSWSIAygCT1z",
            iata_code: "LX"
          },
          id: "ost_0000AARIMdSxwKtG4Kxnmr",
          duration: "PT01H40M",
          distance: "759.60848",
          destination_terminal: null,
          destination: {
            type: "airport",
            time_zone: "Europe/London",
            name: "London City Airport",
            longitude: 0.052398,
            latitude: 51.505071,
            id: "arp_lcy_gb",
            icao_code: "EGLC",
            iata_country_code: "GB",
            iata_code: "LCY",
            iata_city_code: "LON",
            city_name: "London",
            city: {
              type: "city",
              time_zone: null,
              name: "London",
              longitude: null,
              latitude: null,
              id: "cit_lon_gb",
              icao_code: null,
              iata_country_code: "GB",
              iata_code: "LON",
              iata_city_code: "LON",
              city_name: null
            },
            airports: null
          },
          departing_at: "2022-06-04T07:00:00",
          arriving_at: "2022-06-04T07:40:00",
          aircraft: {
            name: "Airbus A220-100",
            id: "arc_00009oBdrPis4D1mAnkllL",
            iata_code: "221"
          }
        }
      ],
      origin_type: "airport",
      origin: {
        type: "airport",
        time_zone: "Asia/Singapore",
        name: "Singapore Changi Airport",
        longitude: 103.985127,
        latitude: 1.356115,
        id: "arp_sin_sg",
        icao_code: "WSSS",
        iata_country_code: "SG",
        iata_code: "SIN",
        iata_city_code: "SIN",
        city_name: "Singapore",
        city: {
          type: "city",
          time_zone: null,
          name: "Singapore",
          longitude: null,
          latitude: null,
          id: "cit_sin_sg",
          icao_code: null,
          iata_country_code: "SG",
          iata_code: "SIN",
          iata_city_code: "SIN",
          city_name: null
        },
        airports: null
      },
      id: "ose_0000AARIMdRu0I2W12Sx84",
      fare_brand_name: "Economy Best Buy",
      duration: "PT15H10M",
      destination_type: "airport",
      destination: {
        type: "airport",
        time_zone: "Europe/London",
        name: "London City Airport",
        longitude: 0.052398,
        latitude: 51.505071,
        id: "arp_lcy_gb",
        icao_code: "EGLC",
        iata_country_code: "GB",
        iata_code: "LCY",
        iata_city_code: "LON",
        city_name: "London",
        city: {
          type: "city",
          time_zone: null,
          name: "London",
          longitude: null,
          latitude: null,
          id: "cit_lon_gb",
          icao_code: null,
          iata_country_code: "GB",
          iata_code: "LON",
          iata_city_code: "LON",
          city_name: null
        },
        airports: null
      },
      conditions: {
        change_before_departure: null
      }
    }
  ],
  payment_requirements: {
    requires_instant_payment: false,
    price_guarantee_expires_at: null,
    payment_required_by: "2021-08-21T05:06:00Z"
  },
  passengers: [
    {
      type: "adult",
      id: "pas_00009hj8USM7Ncg31cAAA"
    }
  ],
  passenger_identity_documents_required: false,
  owner: {
    name: "Lufthansa",
    id: "arl_00009VME7DCkZ5j0wTrtvG",
    iata_code: "LH"
  },
  live_mode: false,
  id: "off_0000AARIMdVnln9uD8I4Cu",
  expires_at: "2021-08-18T05:36:45.000000Z",
  created_at: "2021-08-18T05:06:46.415202Z",
  conditions: {
    refund_before_departure: null,
    change_before_departure: null
  },
  base_currency: "GBP",
  base_amount: "167.22",
  allowed_passenger_identity_document_types: ["passport"]
};

const mockpassengers = [
  {
    id: "pas_00009hj8USM7Ncg31cAAA",
    name: "Amelia Earhart"
  }
];
const mockseatMaps = {
  data: [
    {
      id: "sea_0000A8okiQhItNg1JSmCuW",
      cabins: [
        {
          wings: {
            last_row_index: 1,
            first_row_index: 0
          },
          rows: [
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUS1",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [
                        "Passenger must be an adult",
                        "Do not seat passengers with special needs in exit row seats or bulkheads"
                      ],
                      designator: "28C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUSz",
                          total_currency: "GBP",
                          total_amount: "20.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [
                        "Passenger must be an adult",
                        "Do not seat passengers with special needs in exit row seats or bulkheads"
                      ],
                      designator: "28E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT4",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT7",
                          total_currency: "GBP",
                          total_amount: "20.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [
                        "Passenger must be an adult",
                        "Do not seat passengers with special needs in exit row seats or bulkheads"
                      ],
                      designator: "28H",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [
                        "Passenger must be an adult",
                        "Do not seat passengers with special needs in exit row seats or bulkheads"
                      ],
                      designator: "28J",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQi0qkFBLf6m17",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29C",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29F",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29H",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29J",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30B",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30C",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30F",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30H",
                      available_services: [
                        {
                          id: "ase_0000A8okiQi0qkFBLf6m1T",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30J",
                      available_services: [
                        {
                          id: "ase_0000A8okiQi0qkFBLf6m1W",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30K",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZK",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZQ",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31C",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZV",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31F",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31H",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3Zb",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31J",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3Zi",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32B",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7a",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7g",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32H",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7k",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32J",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7n",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33B",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33C",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7x",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQj4mn5vOxbcfq",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33H",
                      available_services: [
                        {
                          id: "ase_0000A8okiQj4mn5vOxbcfu",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33J",
                      available_services: [
                        {
                          id: "ase_0000A8okiQj4mn5vOxbcfx",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34B",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQj4mn5vOxbcg5",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjQlTNVQ3luE8",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34F",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34H",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34J",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjQlTNVQ3luEI",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35B",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35C",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjQlTNVQ3luEO",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35F",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35H",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjmk9f5R9wBmP",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35J",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjmk9f5R9wBmS",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "lavatory"
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "lavatory"
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "lavatory"
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "exit_row"
                    }
                  ]
                },
                {
                  elements: []
                },
                {
                  elements: [
                    {
                      type: "exit_row"
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCT",
                          total_currency: "GBP",
                          total_amount: "20.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCW",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCZ",
                          total_currency: "GBP",
                          total_amount: "20.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCe",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCh",
                          total_currency: "GBP",
                          total_amount: "20.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36H",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36J",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCm",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36K",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkg",
                          total_currency: "GBP",
                          total_amount: "20.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37A",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkm",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkp",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37D",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37E",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37F",
                      available_services: []
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37H",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkx",
                          total_currency: "GBP",
                          total_amount: "0.0",
                          passenger_id: "pas_00009hj8USM7Ncg31cAAA"
                        }
                      ]
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37J",
                      available_services: []
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37K",
                      available_services: []
                    }
                  ]
                }
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {
                      type: "galley"
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "galley"
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: "galley"
                    }
                  ]
                }
              ]
            }
          ],
          deck: 0,
          aisles: 2,
          cabin_class: "economy"
        }
      ],
      slice_id: "sli_0000A8oTVsOiJ9yVx2A7Vp",
      segment_id: "seg_0000A8oTVsOiJ9yVx2A7Vo"
    }
  ]
};

export const offer = mockoffer; //$.map(mockoffer, function (value, index) {   return [value]; }); // [].slice.call(mockoffer);
export const passengers = mockpassengers; //$.map(mockpassengers, function (value, index) {  return [value];}); // [].slice.call(mockpassengers);
export const seatMaps = mockseatMaps.data; //$.map(mockseatMaps, function (value, index) {  return [value];}); // [].slice.call(mockseatMaps);
