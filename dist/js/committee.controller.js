(function () {
  "use strict";

  angular
    .module('AberdeenCommsHub')
    .controller('CommitteeController', CommitteeController);

  function CommitteeController ($scope) {
    $scope.users = [
      {
        name: "Judith Esson",
        title: "HR",
        image: "img/faces/judith.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\judith%20esson"
      },
      {
        name: "Rowan McNay",
        title: "Finance",
        image: "img/faces/rowan.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\rowan%20mcnay"
      },
      {
        name: "Paula Sutherland",
        title: "Internal Communications",
        image: "img/faces/paula.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\paula%20sutherland"
      },
      {
        name: "Aron Mitchell",
        title: "Finance",
        image: "img/faces/aron.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\aron%20mitchell"
      },
      {
        name: "Boyan Filev",
        title: "Quantitative Investments",
        image: "img/faces/boyan.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\Boyan%20Filev"
      },
      {
        name: "Helen Webster",
        title: "Product",
        image: "img/faces/helen.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\helen%20webster"
      },
      {
        name: "Richard Patterson",
        title: "Quantitative Investments",
        image: "img/faces/richard-2.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\richard%20patterson"
      },
      {
        name: "Jason Sinclair",
        title: "Pensions and Benefits Manager",
        image: "img/faces/jason.png",
        href: "http://staff.aberdeen.aberdeen-asset.com/personsli.aspx?id=SLI_jason_sinclair_standardlife_com_JasonSinclair"
      },
      {
        name: "Frances Trousdell",
        title: "Quantitative Investment Specialist EMEA",
        image: "img/faces/Frances Trousdell.jpg",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\frances%20trousdell"
      },
      {
        name: "Abigail Sater",
        title: "Business Manager, Distribution",
        image: "img/faces/Abigail Sater.jpg",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\abigail%20sater"
      },
      {
        name: "Chris Simpson",
        title: "ASI Transfer Pricing Reporting Accountant",
        image: "img/faces/Chris Simpson.jpg",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\chris%20simpson"
      },
      {
        name: "Lyn Straker",
        title: "HR Business Partner",
        image: "img/faces/Lyn Straker.jpg",
        href: "http://staff.aberdeen.aberdeen-asset.com/person.aspx?accountname=aberdeen\\chris%20simpson"
      }

    ]
  }

}());
