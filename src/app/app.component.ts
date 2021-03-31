import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "my-first-app";

  showLevel_1_Tree = true;
  showLevel_2_Tree = false;
  showLevel_3_Tree = false;
  showLevel_4_Tree = false;
  showLevel_5_Tree = false;
  selectedLevel1Record = [];
  selectedLevel1RecordFlag = false;
  isLevel1Selected = false;

  level1Action(level1: any, showLevel_2_Tree: any) {
    this.isLevel1Selected = true;
    this.showLevel_2_Tree = !showLevel_2_Tree;
    this.selectedLevel1Record = level1;
    //this.level2 = !this.level2;

    console.log(this.selectedLevel1Record);

    //isLevel1Selected
  }

  level0Action() {
    this.isLevel1Selected = false;
    this.showLevel_2_Tree = false;
  }

  testClass(selectedName: string) {
    if (this.isLevel1Selected) {
      if (selectedName == this.selectedLevel1Record["name"]) {
        return "flag1";
      } else {
        return "flag2";
      }
    } else {
      return "flag1";
    }
  }

  constructor() {}

  popupData = {
    Id: "4",
    label: "V4 Defective_Feature",
    variable_name: "V4 Defective_Feature",
    _key: "Defective_Feature",
    key: "V4",
    variable_count: "4",
    variable_field_name: "Defective_Feature",
    required: false,
    data_type: "lookup",
    field_type: "lookup",
    _field_type: "qwLookup",
    units: "",
    sampling_plan: "0",
    default_value: "",
    length: "7",
    convert_to_upper_case_letters: "N",
    popup_file_name: "OFFQUAL - Off Quality Causes",
    number_of_questions_to_ask: "1. What feature was off quality?",
    which_field_to_display_in_popup:
      "1. What was the root cause of off-quality (why-why-why-why-why)",
    viariable_key_to_popup_file: "V3",
    input_file: "",
    output_file: "",
    help_file: "",
    category: "",
    x_ref: "",
    children: {
      name: "What feature was off quality?",
      option_type: "Question",
      children: [
        {
          name: "Mixing                                                      ",
          popup_code: "10",
          option_type: "opt",
          popup_level_code: "10",
          children: [
            {
              name: "What was the quality problem?",
              option_type: "Question",
              children: [
                {
                  name:"Off Color                                                   ",
                  popup_code: "10",
                  option_type: "opt",
                  popup_level_code: "1010",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "10",
                      popup_level_code: "1010",
                      children: [
                        {
                          name:
                            "Wrong tint was added                                        ",
                          popup_code: "10",
                          popup_level_code: "101010"
                        },
                        {
                          name:
                            "Not mixed adequately...mixed colors                         ",
                          popup_code: "20",
                          popup_level_code: "101020"
                        },
                        {
                          name:
                            "Other...please specify                                      ",
                          popup_code: "99",
                          popup_level_code: "101099"
                        }
                      ]
                    }
                  ]
                },
                {
                  name:
                    "Odor                                                        ",
                  popup_code: "20",
                  option_type: "opt",
                  popup_level_code: "1020",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "10",
                      popup_level_code: "1020",
                      children: [
                        {
                          name:
                            "Perfume not added or not right quantity                     ",
                          popup_code: "10",
                          popup_level_code: "102010"
                        },
                        {
                          name:
                            "Wrong Type of perfume added                                 ",
                          popup_code: "20",
                          popup_level_code: "102020"
                        },
                        {
                          name:
                            "Wrong amount of perfume added                               ",
                          popup_code: "30",
                          popup_level_code: "102030"
                        },
                        {
                          name:
                            "Other...please specify                                      ",
                          popup_code: "99",
                          popup_level_code: "102099"
                        }
                      ]
                    }
                  ]
                },
                {
                  name:
                    "Formulation                                                 ",
                  popup_code: "30",
                  option_type: "opt",
                  popup_level_code: "1030",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "10",
                      popup_level_code: "1030",
                      children: [
                        {
                          name:
                            "Wrong Formula used                                          ",
                          popup_code: "10",
                          popup_level_code: "103010"
                        },
                        {
                          name:
                            "Thin - too much water                                       ",
                          popup_code: "20",
                          popup_level_code: "103020"
                        },
                        {
                          name:
                            "Thin - too little material                                  ",
                          popup_code: "30",
                          popup_level_code: "103030"
                        },
                        {
                          name:
                            "Thick - too liitle water                                    ",
                          popup_code: "40",
                          popup_level_code: "103040"
                        },
                        {
                          name:
                            "Other...please describe                                     ",
                          popup_code: "99",
                          popup_level_code: "103099"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Cookie                                                      ",
          popup_code: "20",
          option_type: "opt",
          popup_level_code: "20",
          children: [
            {
              name: "What was the quality problem?",
              option_type: "Question",
              children: [
                {
                  name:
                    "Wrong size, shape or thickness                              ",
                  popup_code: "10",
                  option_type: "opt",
                  popup_level_code: "2010",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "10",
                      popup_level_code: "2010",
                      children: [
                        {
                          name:
                            "Poor forming due to clogged nozzles                         ",
                          popup_code: "10",
                          popup_level_code: "201010"
                        },
                        {
                          name:
                            "Poor forming due to wrong temperature                       ",
                          popup_code: "20",
                          popup_level_code: "201020"
                        },
                        {
                          name:
                            "Poor forming due to wrong conveyor belt setup or speed      ",
                          popup_code: "30",
                          popup_level_code: "201030"
                        },
                        {
                          name:
                            "Other...please specify                                      ",
                          popup_code: "99",
                          popup_level_code: "201099"
                        }
                      ]
                    }
                  ]
                },
                {
                  name:
                    "Contamination                                               ",
                  popup_code: "20",
                  option_type: "opt",
                  popup_level_code: "2020",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "10",
                      popup_level_code: "2020",
                      children: [
                        {
                          name:
                            "Wrong or too much processing aids used on equipment         ",
                          popup_code: "10",
                          popup_level_code: "202010"
                        },
                        {
                          name:
                            "Dirty Equipment....needs cleaning                           ",
                          popup_code: "20",
                          popup_level_code: "202020"
                        },
                        {
                          name:
                            "Other...please describe                                     ",
                          popup_code: "99",
                          popup_level_code: "202099"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Wrapper                                                     ",
          popup_code: "30",
          option_type: "opt",
          popup_level_code: "30",
          children: [
            {
              name: "What was the quality problem?",
              option_type: "Question",
              children: [
                {
                  name:
                    "Not square                                                  ",
                  popup_code: "20",
                  option_type: "opt",
                  popup_level_code: "3020",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "20",
                      popup_level_code: "3020",
                      children: [
                        {
                          name:
                            "material not tracked correctly                              ",
                          popup_code: "20",
                          popup_level_code: "302020"
                        },
                        {
                          name:
                            "not properly sealed                                         ",
                          popup_code: "40",
                          popup_level_code: "302040"
                        },
                        {
                          name:
                            "other                                                       ",
                          popup_code: "99",
                          popup_level_code: "302099"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Cartons                                                     ",
          popup_code: "50",
          option_type: "opt",
          popup_level_code: "50",
          children: [
            {
              name: "What was the quality problem?",
              option_type: "Question",
              children: [
                {
                  name:
                    "not sealed properly                                         ",
                  popup_code: "20",
                  option_type: "opt",
                  popup_level_code: "5020",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "20",
                      popup_level_code: "5020",
                      children: [
                        {
                          name:
                            "Adjust tension to sealer                                    ",
                          popup_code: "20",
                          popup_level_code: "502020"
                        },
                        {
                          name:
                            "Wrong Case                                                  ",
                          popup_code: "60",
                          popup_level_code: "502060"
                        },
                        {
                          name:
                            "Other...please describe                                     ",
                          popup_code: "99",
                          popup_level_code: "502099"
                        }
                      ]
                    }
                  ]
                },
                {
                  name:
                    "Wrong Carton                                                ",
                  popup_code: "30",
                  option_type: "opt",
                  popup_level_code: "5030",
                  children: [
                    {
                      name:
                        "What was the root cause of off-quality (why-why-why-why-why)",
                      option_type: "Question",
                      popup_code: "10",
                      popup_level_code: "5030",
                      children: [
                        {
                          name:
                            "Line cleanance not followed                                 ",
                          popup_code: "10",
                          popup_level_code: "503010"
                        },
                        {
                          name:
                            "Not coded properly                                          ",
                          popup_code: "20",
                          popup_level_code: "503020"
                        },
                        {
                          name:
                            "Other...please describe                                     ",
                          popup_code: "99",
                          popup_level_code: "503099"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    popup_type: "multi"
  };
}
