var wms_layers = [];

var lyr_Ombreggiatura_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ombreggiatura<br />\
    <img src="styles/legend/Ombreggiatura_0_0.png" /> 0<br />\
    <img src="styles/legend/Ombreggiatura_0_1.png" /> 254.926<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ombreggiatura_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [988052.190169, 5773705.442868, 988684.462640, 5774339.067595]
        })
    });
var format_Zonadistacco_1 = new ol.format.GeoJSON();
var features_Zonadistacco_1 = format_Zonadistacco_1.readFeatures(json_Zonadistacco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonadistacco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonadistacco_1.addFeatures(features_Zonadistacco_1);
var lyr_Zonadistacco_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonadistacco_1, 
                style: style_Zonadistacco_1,
                popuplayertitle: 'Zona di stacco',
                interactive: true,
                title: '<img src="styles/legend/Zonadistacco_1.png" /> Zona di stacco'
            });
var format_Possibilepercorso4_2 = new ol.format.GeoJSON();
var features_Possibilepercorso4_2 = format_Possibilepercorso4_2.readFeatures(json_Possibilepercorso4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possibilepercorso4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possibilepercorso4_2.addFeatures(features_Possibilepercorso4_2);
var lyr_Possibilepercorso4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possibilepercorso4_2, 
                style: style_Possibilepercorso4_2,
                popuplayertitle: 'Possibile percorso 4',
                interactive: true,
                title: '<img src="styles/legend/Possibilepercorso4_2.png" /> Possibile percorso 4'
            });
var format_Possibilepercorso3_3 = new ol.format.GeoJSON();
var features_Possibilepercorso3_3 = format_Possibilepercorso3_3.readFeatures(json_Possibilepercorso3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possibilepercorso3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possibilepercorso3_3.addFeatures(features_Possibilepercorso3_3);
var lyr_Possibilepercorso3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possibilepercorso3_3, 
                style: style_Possibilepercorso3_3,
                popuplayertitle: 'Possibile percorso 3',
                interactive: true,
                title: '<img src="styles/legend/Possibilepercorso3_3.png" /> Possibile percorso 3'
            });
var format_Possibilepercorso2_4 = new ol.format.GeoJSON();
var features_Possibilepercorso2_4 = format_Possibilepercorso2_4.readFeatures(json_Possibilepercorso2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possibilepercorso2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possibilepercorso2_4.addFeatures(features_Possibilepercorso2_4);
var lyr_Possibilepercorso2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possibilepercorso2_4, 
                style: style_Possibilepercorso2_4,
                popuplayertitle: 'Possibile percorso 2',
                interactive: true,
                title: '<img src="styles/legend/Possibilepercorso2_4.png" /> Possibile percorso 2'
            });
var format_Possibilepercorso1_5 = new ol.format.GeoJSON();
var features_Possibilepercorso1_5 = format_Possibilepercorso1_5.readFeatures(json_Possibilepercorso1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possibilepercorso1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possibilepercorso1_5.addFeatures(features_Possibilepercorso1_5);
var lyr_Possibilepercorso1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possibilepercorso1_5, 
                style: style_Possibilepercorso1_5,
                popuplayertitle: 'Possibile percorso 1',
                interactive: true,
                title: '<img src="styles/legend/Possibilepercorso1_5.png" /> Possibile percorso 1'
            });
var lyr_AC0381MisurazioneufficialeWebmapacolori_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.ti.ch/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ac_038_1_v1_0_misurazione_ufficiale_webmap_colori",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '[AC-038.1] Misurazione ufficiale Webmap a colori',
                            popuplayertitle: '[AC-038.1] Misurazione ufficiale Webmap a colori',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AC0381MisurazioneufficialeWebmapacolori_6, 0]);
var group_Percorsiependenze = new ol.layer.Group({
                                layers: [lyr_Possibilepercorso4_2,lyr_Possibilepercorso3_3,lyr_Possibilepercorso2_4,lyr_Possibilepercorso1_5,],
                                fold: 'open',
                                title: 'Percorsi e pendenze'});

lyr_Ombreggiatura_0.setVisible(true);lyr_Zonadistacco_1.setVisible(true);lyr_Possibilepercorso4_2.setVisible(true);lyr_Possibilepercorso3_3.setVisible(true);lyr_Possibilepercorso2_4.setVisible(true);lyr_Possibilepercorso1_5.setVisible(true);lyr_AC0381MisurazioneufficialeWebmapacolori_6.setVisible(true);
var layersList = [lyr_Ombreggiatura_0,lyr_Zonadistacco_1,group_Percorsiependenze,lyr_AC0381MisurazioneufficialeWebmapacolori_6];
lyr_Zonadistacco_1.set('fieldAliases', {'id': 'id', });
lyr_Possibilepercorso4_2.set('fieldAliases', {'id': 'id', });
lyr_Possibilepercorso3_3.set('fieldAliases', {'id': 'id', });
lyr_Possibilepercorso2_4.set('fieldAliases', {'id': 'id', });
lyr_Possibilepercorso1_5.set('fieldAliases', {'id': 'id', });
lyr_Zonadistacco_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Possibilepercorso4_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Possibilepercorso3_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Possibilepercorso2_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Possibilepercorso1_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Zonadistacco_1.set('fieldLabels', {'id': 'no label', });
lyr_Possibilepercorso4_2.set('fieldLabels', {'id': 'no label', });
lyr_Possibilepercorso3_3.set('fieldLabels', {'id': 'no label', });
lyr_Possibilepercorso2_4.set('fieldLabels', {'id': 'no label', });
lyr_Possibilepercorso1_5.set('fieldLabels', {'id': 'no label', });
lyr_Possibilepercorso1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});