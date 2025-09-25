mods.registerMod({
    name: "Shadow Force",
    version: "1.0",
    description: "Adiciona Relâmpago Negro, Raio de Petrificação e Fogo Negro."
});

elements.black_lightning = {
    color: ["#000000", "#1d1919ff", "#4569e0ff"],
    behavior: behaviors.ELECTRIC,
    category: "energy",
    state: "gas",
    density: 1,
    temp: 3000,
    conduct: 1,
    reactions: {

    }
};

elements.petrify_ray = {
    color: "#00aa00",
    behavior: behaviors.LIQUID,
    category: "energy",
    state: "liquid",
    density: 900,
    reactions: {
        wood: { elem2: "stone", chance: 0.7 },
        human: { elem2: "stone", chance: 1 },

    }
};

elements.black_fire = {
    color: ["#111111", "#330033", "#550055"],
    behavior: behaviors.FIRE,
    category: "energy",
    state: "gas",
    temp: 1500,
    burn: 200,
    burnTime: 600,
    fireColor: "#6c01b3ff"
    }
};

elements.white_fire = {
   color: ["#958f8fff", "#f5f5f5ff", #f2e60eff],
    behavior: bevaviors.FIRE,
    category: "energy",
    state: "gas",
    temp: 1500,
    burn: 200,
    burnTime: 600,
    fireColor: "#0a2148ff"
    }
};

elements.amaterasu = {
    color: ["#121112ff", "#c91c1cc3"],
    behavior: behaviors.FIRE,
    category: "energy",
    state: "gas",
    temp: 1500,
    burn: 200,
    burnTime: 600,
    fireColor: "#d51204ff",
};

// Shadow Bolt moving left
elements.shadow_bolt_left = {
    color: "#1a1a1a",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    tick: function(pixel){
        if(pixel.x > 0){
            let target = pixel.getPixel(pixel.x - 1, pixel.y);
            if(target && target.name != "shadow_bolt_left"){
                if(target.state == "solid" || target.state == "liquid"){
                    target.delete();
                }
            }
            pixel.moveTo(pixel.x - 1, pixel.y);
        }
    }
};

// Shadow Bolt moving right
elements.shadow_bolt_right = {
    color: "#1a1a1a",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    tick: function(pixel){
        if(pixel.x < canvas.width-1){
            let target = pixel.getPixel(pixel.x + 1, pixel.y);
            if(target && target.name != "shadow_bolt_right"){
                if(target.state == "solid" || target.state == "liquid"){
                    target.delete();
                }
            }
            pixel.moveTo(pixel.x + 1, pixel.y);
        }
    }
};
