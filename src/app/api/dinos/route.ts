import type { Dino } from "./dino";

export async function GET() {
  return new Response(JSON.stringify(dinos), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

const dinos: Dino[] = [
  {
    name: "Tyrannosaurus",
    imageUrl: "/images/tyrannosaurus.png",
    diet: "carnivorous",
    weightInKg: 7000,
    description:
      "Der Tyrannosaurus war ein großer, fleischfressender Dinosaurier mit scharfen Zähnen und mächtigen Kiefern. Er war einer der größten Raubtiere, die jemals auf der Erde gelebt haben und konnte bis zu 12 Meter lang und 6 Meter hoch werden.",
  },
  {
    name: "Velociraptor",
    imageUrl: "/images/velociraptor.png",
    diet: "carnivorous",
    weightInKg: 7,
    description:
      "Der Velociraptor war ein kleiner, aber sehr wendiger und intelligenter Raubdinosaurier. Er hatte eine scharfe Klaue an jedem Fuß, mit der er seine Beute fangen und töten konnte. Er war etwa so groß wie ein menschlicher Erwachsener und konnte bis zu 60 km/h schnell laufen.",
  },
  {
    name: "Dilophosaurus",
    diet: "carnivorous",
    imageUrl: "/images/dilophosaurus.png",
    weightInKg: 300,
    description:
      "Der Dilophosaurus war ein mittelgroßer Raubdinosaurier, der durch seine beiden auffälligen Kopfkämme gekennzeichnet war. Er hatte scharfe Zähne und starke Kiefer, mit denen er seine Beute erlegen konnte. Er konnte bis zu sechs Meter lang werden und wog etwa eine Tonne.",
  },
  {
    name: "Kentrosaurus",
    imageUrl: "/images/kentrosaurus.png",
    diet: "herbivorous",
    weightInKg: 1000,
    description:
      "Der Kentrosaurus war ein gepanzerter Dinosaurier mit scharfen Stacheln auf seinem Schwanz. Er ernährte sich hauptsächlich von Pflanzen und hatte starke Kiefer, mit denen er die harten Blätter und Stängel zerkleinern konnte. Er war etwa 4,5 Meter lang und wog etwa eine Tonne.",
  },
  {
    name: "Elasmosaurus",
    imageUrl: "/images/elasmosaurus.png",
    diet: "carnivorous",
    weightInKg: 2000,
    description:
      "Der Elasmosaurus war ein großer Meeresreptil, das im späten Jura lebte. Er hatte einen langen Hals und einen kurzen, massiven Körper, mit dem er sich im Wasser fortbewegen konnte. Er war ein schneller und geschickter Jäger und ernährte sich von Fischen und anderen Meeresbewohnern.",
  },
  {
    name: "Bagaceratops",
    imageUrl: "/images/bagaceratops.png",
    diet: "herbivorous",
    weightInKg: 45,
    description:
      "Bagaceratops war ein kleiner Ceratopsier-Dinosaurier, der vor etwa 80 Millionen Jahren in der späten Kreidezeit lebte. Er war ungefähr so groß wie ein Schaf und hatte ein kleines Horn auf seiner Nase sowie zwei längere Hörner über seinen Augen. Er ernährte sich von Pflanzen und lebte in der Gobi-Wüste in der heutigen Mongolei.",
  },
  {
    name: "Pterodactyl",
    imageUrl: "/images/pterodactyl.png",
    diet: "carnivorous",
    weightInKg: 70,
    description:
      "Pterodactyl war kein Dinosaurier, sondern ein Flugsaurier, der vor etwa 150 Millionen Jahren in der späten Jura- und frühen Kreidezeit lebte. Er hatte eine Flügelspannweite von bis zu 10 Metern und war somit der größte Flugsaurier, der je gelebt hat. Pterodactyle ernährten sich von Fischen und anderen kleinen Tieren, die sie während des Fluges gefangen haben. Sie lebten in verschiedenen Regionen auf der ganzen Welt, von Europa bis Nordamerika und Afrika.",
  },
];
