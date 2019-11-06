app.directive('verksamheter', [function () {

  return {
    templateUrl: '/directives/verksamheter.html',
    controller: ['$scope', function ($scope) {

      $scope.headCategory = [
        {
          id: 1,
          pic: "images/verksamhet/familj1.jpg",
          headTitle: "Familjebehandling",
          title: "Familjebehandling",
          subTitle: "Insatser till offentlig förvaltning och privatpersoner",
          text: "Vi som arbetar med familjeinsatser har lång erfarenhet av psykosocialt förändringsarbete både från öppenvård, kommunal förvaltning och från institutionsvård. Vi arbetar med upprättad vårdplan och genomförandeplan som grund. Vi erbjuder olika insatser som är anpassade till såväl vuxna som barn och de kan med fördel kombineras.",
          subCats: [
            {
              id: 1,
              headTitle: "Vår grundsyn",
              subTitle: "Vi utgår från en salutogen grund samt ett systemiskt förhållningssätt",
              text: "Vi på Resursforum anser att relationen och samspelets kvalitet är avgörande i förändringsprocesser och vi erbjuder trovärdiga relationer. I dialog skapas förutsättningar för familjemedlemmarna att lyssna på varandra och på sig själva. Därmed skapas utrymme för reflektion och eftertanke, vilket är ett första steg för att kunna agera och interagera annorlunda. Vi är övertygade om att det i varje familjesystem finns lika många upplevda sanningar som familjemedlemmar. För att en varaktig förändring ska kunna ske måste dessa olika röster få bli hörda. Behandlingsarbetet grundar sig i stor respekt för den enskildes livssituation och livshistoria. Integritet, nyfikenhet, lyssnande, samskapande, dialog och reflektion är ledord för oss. Vi benämner och bekräftar svårigheter, men för att familjens livssituation skall bli annorlunda, krävs att vi upptäcker och stärker redan fungerande samspel och familjemönster.",
            },
            {
              id: 2,
              headTitle: "Familjesamtal",
              subTitle: "Familjesamtal utifrån ett systemiskt förhållningssätt",
              text: "Resursforum erbjuder familjesamtal utifrån ett systemiskt och salutogent förhållningssätt. Vi leder förändringsarbetet framåt genom att möta familjen där den befinner sig, samt följa och bemöta familjen utvecklingsbefrämjande under processen. Genom dialog erbjuds familjen möjlighet att tillsammans hitta nya sätt att interagera. Aktivt lyssnande, reflektion och respektfullt bemötande utgör grunden för våra familjesamtal. I varje familjesystem finns lika många upplevda sanningar som familjemedlemmar och dessa olika röster måste bli hörda och bemötta för att varaktig förändring ska ske. I familjesamtalen erbjuder vi respektive familjemedlem möjlighet att tydliggöra sig själv, samt att lyssna på varandra. Därmed skapas gemensamt utrymme för reflektion och eftertanke, vilket är en förutsättning för att kunna agera och interagera annorlunda. Familjesamtalen kombineras med fördel med någon av Resursforums andra familjeinsatser."
            }
          ]
        },
        {
          id: 1,
          pic: "images/verksamhet/familj2.jpg",
          headTitle: "Utredningar",
          title: "Hemmabaserade anknytnings- och samspelsutredningar",
          subTitle: "Ett kvalificerat och kostnadseffektivt alternativ till utredning på institution",
          text: "Till vilka riktar sig insatsen? Resursforums utredningar är ett alternativ för er som önskar ett omfattande, kvalificerat och hemmabaserat utredningsarbete. Utredningarna riktar sig främst till de familjer där det finns en så stor oro för barnets situation att placering av barnet övervägs. Utredningarna lämpar sig för de familjer där socialförvaltningen har svårt för att få tillgång till familjen, vilket leder till att man som socialförvaltning inte har möjlighet att få orden och beskrivningarna för den oro som finns kring familjen. Tillgång till familjen innebär att familjen och socialförvaltningen ges möjlighet till en rättssäker och välgrundad bedömning av barnets symtom och behov, föräldrarnas förmåga samt föräldrarnas förmåga till utveckling. Vilka är fördelarna med en hemmabaserad utredning i motsats till utredning på institution? När barn och föräldrar befinner sig i sin naturliga vardag tydliggörs såväl funktionella som dysfunktionella relationer, samspelsmönster och rutiner. Att utredas i hemmiljön upplevs av föräldrar och barn som mindre belastande, vilket leder till bättre förutsättningar att våga visa och sätta ord på vad som behöver förändras och vilken förmåga föräldrarna har att göra detta. Hemmiljön underlättar hörandet av barnets röst och tydliggör dess behov. Barnet ges också möjlighet att få behålla sin naturliga vardag såsom skola och kamrater vilket skapar trygghet. Hur bedrivs utredningen? Utredningen bedrivs i familjens hemmiljö, 15-20 timmar/vecka, i åtta veckor och omfattar hela familjesystemet. Resursforum utreder med ett systemiskt förhållningssätt med tydlig betoning på samspel och anknytning. Resursforum utreder i dialog med familjen. Dialogen ger de olika familjemedlemmarna möjlighet att lyssna på varandras röster, speciellt fokus läggs på att möjliggöra föräldrarnas förmåga att lyssna på barnets röst. Utifrån dialogen skapas utrymme för reflektion, vilket är ett första steg för att kunna agera och interagera annorlunda. Vår erfarenhet är att detta ger familjen förutsättningar att starta en förändringsprocess redan under utredningsperioden, som totalt sett omfattar 10 veckor. Vem utför utredningsuppdraget? Resursforums utredningsteam består av socionomer med mångårig erfarenhet av komplicerade utredningar enligt Socialtjänstlagen. I teamet finns hög kompetens och stor erfarenhet av att utföra svåra anknytnings- och samspelsutredningar. Kompetensen innebär att Resursforum kan leverera en skriftlig produkt av hög kvalitet där stor vikt läggs vid att sätta ord på de samspel- och anknytningsmönster som finns i familjen och att knyta det utredarna ser till aktuell forskning och välgrundad litteratur. Under utredningstiden erhåller utredarna processhandledning två timmar per veckan. Referenser från tidigare uppdragsgivare kan lämnas om så önskas."
        },
        {
          id: 2,
          pic: "images/verksamhet/familj3.jpg",
          headTitle: "Socionomkonsulter",
          subTitle: "Personalförstärkning inom socialt arbete",
          text: "Vi som arbetar med familjeinsatser har lång erfarenhet av psykosocialt förändringsarbete både från öppenvård, kommunal förvaltning och från institutionsvård. Vi arbetar med upprättad vårdplan och genomförandeplan som grund. Vi erbjuder olika insatser som är anpassade till såväl vuxna som barn och de kan med fördel kombineras."
        },
        {
          id: 3,
          pic: "images/verksamhet/familj3.jpg",
          headTitle: "Privatpersoner",
          subTitle: "För privatpersoner",
          text: "Vi som arbetar med familjeinsatser har lång erfarenhet av psykosocialt förändringsarbete både från öppenvård, kommunal förvaltning och från institutionsvård. Vi arbetar med upprättad vårdplan och genomförandeplan som grund. Vi erbjuder olika insatser som är anpassade till såväl vuxna som barn och de kan med fördel kombineras."
        },
        {
          id: 4,
          pic: "images/verksamhet/familj4.jpg",
          headTitle: "Familjehem",
          subTitle: "Vi söker familjehem",
          text: "Vi som arbetar med familjeinsatser har lång erfarenhet av psykosocialt förändringsarbete både från öppenvård, kommunal förvaltning och från institutionsvård. Vi arbetar med upprättad vårdplan och genomförandeplan som grund. Vi erbjuder olika insatser som är anpassade till såväl vuxna som barn och de kan med fördel kombineras."
        }
      ];

      // $scope.CategoryInfo = [
      //   {
      //     text: "Familjebehandling"
      //   }
      // ];

    }]
  };
}]);