

$(document).ready(function () {
    //$('.bs-example-modal-lg').modal('show');

    var $btnYesWrapper = $('.btn-yes'),
        $btnNoWrapper = $('.btn-no'),
        detailsClass = '.symptom-item-details',
        formGroupClass = '.form-group';


    $btnYesWrapper.click(function (e) {
        var $this = $(this);
        $this.closest('.symptom-item').find(detailsClass).slideDown();
        $this.closest('.symptom-item').addClass('symptom-selected');
    });

    $btnNoWrapper.click(function (e) {
        var $this = $(this);
        $this.closest('.symptom-item').find(detailsClass).slideUp();
    });

});

var symptoms = {
    firstConsultation:
        {
            // objawy oddechowe
            symptomsOfRespiratory:
            {
                // gorączka
                heat: {
                    isSelected: false,
                    degrease: "",
                    since: ""
                },
                // gardło
                throat: {
                    isSelected: false,
                    since: ""
                },
                // chrypka
                hoarseness: {
                    isSelected: false,
                    since: ""
                },
                // katar
                runnyNose: {
                    isSelected: false,
                    since: ""
                },
                // uczucie zatkania nosa
                nasalStuffiness: {
                    isSelected: false,
                    since: ""
                },
                // kaszel
                cough: {
                    isSelected: false,
                    isWet: "",
                    isDry: ""
                },
                // uczucie duszności
                shortnessOfBreath: {
                    isSelected: false,
                    description: ""
                },
                // leki przyjmowane w związku z obecnymi dolegliwościami
                takingDrugs: {
                    isSelected: false,
                    description: ""
                },
            },

            // objawy brzuszne
            abdominalSymptoms: {
                // wymioty
                vomiting: {
                    isSelected: false,
                    howManyTimes: "",
                    since: "",
                },
                // biegunka
                diarrhea: {
                    isSelected: false,
                    since: "",
                    howManyTimes: "",
                    stoolWatery: "",
                    stoolMucus: "",
                    stoolBloody: ""

                },
                // ból brzucha
                abdominalPain: {
                    isSelected: false,
                    description: "",
                },
                // ból w podbrzuszu
                lowerAbdomenPain: {
                    isSelected: false,
                    description: "",
                },
                // ból w okolicy lędzwiowej
                lumbarAreaPain: {
                    isSelected: false,
                    description: "",
                },
                // gorączka
                heat: {
                    degrease: "",
                    since: ""
                }
            },
            other: "",
            description: "",
        },
};

