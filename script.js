// Dados
const ufData = {
    "400": "BH1",
    "401": "JZF",
    "402": "TRG",
    "403": "MGS",
    "404": "MGL",
    "405": "BSB",
    "406": "CGR",
    "407": "CBA",
    "410": "GYN"
};

const zoneData = {
    "400": [
        "3990_400_001",
        "3990_400_003",
        "3990_400_004",
        "3990_400_005",
        "3990_400_007",
        "3990_400_008",
        "3990_400_009",
        "3990_400_010",
        "3990_400_011",
        "3990_400_012",
        "3990_400_013",
        "3990_400_014"
    ],
    "401": [
        "3990_401_021",
        "3990_401_022",
        "3990_401_023",
        "3990_401_024",
        "3990_401_025",
        "3990_401_026",
        "3990_401_027",
        "3990_401_028",
        "3990_401_029",
        "3990_401_030"
    ],
    "402": [
        "3990_402_041",
        "3990_402_043",
        "3990_402_044",
        "3990_402_046",
        "3990_402_047",
        "3990_402_048",
        "3990_402_049",
        "3990_402_050",
        "3990_402_051",
        "3990_402_052",
        "3990_402_054",
        "3990_402_056"
    ],
    "403": [
        "3990_403_061",
        "3990_403_062",
        "3990_403_063",
        "3990_403_064",
        "3990_403_066",
        "3990_403_071",
        "3990_403_072",
        "3990_403_073",
        "3990_403_074",
        "3990_403_075",
        "3990_403_076",
        "3990_403_077",
        "3990_403_078",
        "3990_403_079"
    ],
    "404": [
        "3990_404_082",
        "3990_404_083",
        "3990_404_084",
        "3990_404_085",
        "3990_404_086",
        "3990_404_087",
        "3990_404_090",
        "3990_404_091",
        "3990_404_092",
        "3990_404_093",
        "3990_404_094",
        "3990_404_095"
    ],
    "405": [
        "3990_405_101",
        "3990_405_102",
        "3990_405_104",
        "3990_405_105",
        "3990_405_106",
        "3990_405_107",
        "3990_405_108",
        "3990_405_109",
        "3990_405_110",
        "3990_405_116",
        "3990_405_117",
        "3990_405_118"
    ],
    "406": [
        "3990_406_130",
        "3990_406_131",
        "3990_406_132",
        "3990_406_133",
        "3990_406_134",
        "3990_406_135",
        "3990_406_136",
        "3990_406_137",
        "3990_406_138",
        "3990_406_139",
        "3990_406_140",
        "3990_406_141",
        "3990_406_142"
    ],
    "407": [
        "3990_407_141",
        "3990_407_142",
        "3990_407_143",
        "3990_407_145",
        "3990_407_146",
        "3990_407_147",
        "3990_407_148",
        "3990_407_149",
        "3990_407_150",
        "3990_407_151",
        "3990_407_152",
        "3990_407_153",
        "3990_407_154",
        "3990_407_155",
        "3990_407_156",
        "3990_407_157"
    ],
    "410": [
        "3990_410_180",
        "3990_410_181",
        "3990_410_182",
        "3990_410_183",
        "3990_410_184",
        "3990_410_185",
        "3990_410_186",
        "3990_410_187",
        "3990_410_188",
        "3990_410_189",
        "3990_410_190",
        "3990_410_192",
        "3990_410_193"
    ]
};

const zoneTargetData = {
  "3990_400_001": {
    "Vendas": { target: 160, current: 110 },
    "Varejos Abertos": { target: 85, current: 55 },
    "Novos Clientes": { target: 65, current: 45 },
    "Retenção": { target: 92, current: 72 },
    "Conversão": { target: 125, current: 95 }
  },
  "3990_400_003": {
    "Vendas": { target: 155, current: 105 },
    "Varejos Abertos": { target: 78, current: 48 },
    "Novos Clientes": { target: 58, current: 38 },
    "Retenção": { target: 88, current: 68 },
    "Conversão": { target: 118, current: 88 }
  },
  "3990_400_004": {
    "Vendas": { target: 145, current: 95 },
    "Varejos Abertos": { target: 75, current: 45 },
    "Novos Clientes": { target: 55, current: 35 },
    "Retenção": { target: 85, current: 65 },
    "Conversão": { target: 115, current: 85 }
  },
  "3990_400_005": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_007": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_008": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_009": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_010": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_011": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_012": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_400_013": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_400_014": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_401_021": {
      "Vendas": { target: 170, current: 120 },
      "Varejos Abertos": { target: 90, current: 60 },
      "Novos Clientes": { target: 70, current: 50 },
      "Retenção": { target: 95, current: 75 },
      "Conversão": { target: 130, current: 100 }
    },
     "3990_401_022": {
      "Vendas": { target: 160, current: 110 },
      "Varejos Abertos": { target: 85, current: 55 },
      "Novos Clientes": { target: 65, current: 45 },
      "Retenção": { target: 92, current: 72 },
      "Conversão": { target: 125, current: 95 }
    },
    "3990_401_023": {
      "Vendas": { target: 150, current: 100 },
      "Varejos Abertos": { target: 80, current: 50 },
      "Novos Clientes": { target: 60, current: 40 },
      "Retenção": { target: 90, current: 70 },
      "Conversão": { target: 120, current: 90 }
    },
    "3990_401_024": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_401_025": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_401_026": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_401_027": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_401_028": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_401_029": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_401_030": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_402_041": {
      "Vendas": { target: 180, current: 130 },
      "Varejos Abertos": { target: 95, current: 65 },
      "Novos Clientes": { target: 75, current: 55 },
      "Retenção": { target: 98, current: 78 },
      "Conversão": { target: 135, current: 105 }
    },
    "3990_402_043": {
      "Vendas": { target: 170, current: 120 },
      "Varejos Abertos": { target: 90, current: 60 },
      "Novos Clientes": { target: 70, current: 50 },
      "Retenção": { target: 95, current: 75 },
      "Conversão": { target: 130, current: 100 }
    },
    "3990_402_044": {
      "Vendas": { target: 160, current: 110 },
      "Varejos Abertos": { target: 85, current: 55 },
      "Novos Clientes": { target: 65, current: 45 },
      "Retenção": { target: 92, current: 72 },
      "Conversão": { target: 125, current: 95 }
    },
      "3990_402_046": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
      "3990_402_047": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_402_048": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_402_049": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_402_050": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_402_051": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_402_052": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_402_054": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_402_056": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_403_061": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
      "3990_403_062": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_063": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_064": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_066": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_071": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_403_072": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_073": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_074": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_075": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_076": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
      "3990_403_077": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
    "3990_403_078": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
     "3990_403_079": {
        "Vendas": { target: 150, current: 100 },
        "Varejos Abertos": { target: 80, current: 50 },
        "Novos Clientes": { target: 60, current: 40 },
        "Retenção": { target: 90, current: 70 },
        "Conversão": { target: 120, current: 90 }
    },
};
// Preenche o select de UF
const ufSelect = document.getElementById("ufSelect");
for (const key in ufData) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = ufData[key];
    ufSelect.appendChild(option);
}

// Manipula a mudança de UF
ufSelect.addEventListener("change", function() {
    const selectedUf = this.value;
    const zoneSelect = document.getElementById("zoneSelect");
    zoneSelect.innerHTML = '<option value="">Selecione a Zona</option>'; // Limpa as opções
    zoneSelect.disabled = true;
    const targetDataContainer = document.getElementById("targetDataContainer");
    targetDataContainer.innerHTML = ""; // Limpa os dados

    if (selectedUf) {
        zoneSelect.disabled = false;
        const zones = zoneData[selectedUf];
        if (zones) {
            zones.forEach(zone => {
                const option = document.createElement("option");
                option.value = zone;
                option.textContent = zone;
                zoneSelect.appendChild(option);
            });
        }
    }
});

// Manipula a mudança de Zona
const zoneSelect = document.getElementById("zoneSelect");
zoneSelect.addEventListener("change", function() {
    const selectedZone = this.value;
    const targetDataContainer = document.getElementById("targetDataContainer");
    targetDataContainer.innerHTML = ""; // Limpa os dados

    if (selectedZone) {
        const data = zoneTargetData[selectedZone];
        if (data) {
            for (const key in data) {
                const { target, current } = data[key];
                const progress = (current / target) * 100;
                const remaining = target - current;

                // Cria os elementos do card dinamicamente
                const card = document.createElement("div");
                card.classList.add("card");

                const cardHeader = document.createElement("div");
                cardHeader.classList.add("card-header");
                cardHeader.textContent = key;

                const cardContent = document.createElement("div");
                cardContent.classList.add("card-content");

                const progressBarContainer = document.createElement("div");
                progressBarContainer.classList.add("progress-bar");

                const progressBar = document.createElement("div");
                progressBar.classList.add("progress");
                progressBar.style.width = `${progress}%`;

                progressBarContainer.appendChild(progressBar);

                const progressText = document.createElement("div");
                progressText.classList.add("progress-text");
                progressText.textContent = `${current}/${target} - Faltam ${remaining}`;

                cardContent.appendChild(progressBarContainer);
                cardContent.appendChild(progressText);

                card.appendChild(cardHeader);
                card.appendChild(cardContent);

                targetDataContainer.appendChild(card);
            }
        } else {
            targetDataContainer.textContent = "Dados não encontrados para esta zona.";
        }
    }
});
