var wms_layers = [];

var lyr_L150694E0940N_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0694E-0940N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150694E0940N_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6457400.148629, -1643701.856010, -6437832.269390, -1624133.976772]
                            })
                        });
var lyr_L150694E0941N_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0694E-0941N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150694E0941N_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6457400.148629, -1624133.976772, -6437832.269390, -1604566.097533]
                            })
                        });
var lyr_L150695E0940N_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0695E-0940N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150695E0940N_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6437832.269390, -1643701.856010, -6418264.390152, -1624133.976772]
                            })
                        });
var lyr_L150695E0941N_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "L15-0695E-0941N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/L150695E0941N_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6437832.269390, -1624133.976772, -6418264.390152, -1604566.097533]
                            })
                        });
var format_COTA_4 = new ol.format.GeoJSON();
var features_COTA_4 = format_COTA_4.readFeatures(json_COTA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COTA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COTA_4.addFeatures(features_COTA_4);
var lyr_COTA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COTA_4, 
                style: style_COTA_4,
                interactive: false,
                title: '<img src="styles/legend/COTA_4.png" /> COTA'
            });
var format_San_Antonio_5 = new ol.format.GeoJSON();
var features_San_Antonio_5 = format_San_Antonio_5.readFeatures(json_San_Antonio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_San_Antonio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_San_Antonio_5.addFeatures(features_San_Antonio_5);
var lyr_San_Antonio_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_San_Antonio_5, 
                style: style_San_Antonio_5,
                interactive: false,
                title: '<img src="styles/legend/San_Antonio_5.png" /> San_Antonio'
            });

lyr_L150694E0940N_0.setVisible(true);lyr_L150694E0941N_1.setVisible(true);lyr_L150695E0940N_2.setVisible(true);lyr_L150695E0941N_3.setVisible(true);lyr_COTA_4.setVisible(true);lyr_San_Antonio_5.setVisible(true);
var layersList = [lyr_L150694E0940N_0,lyr_L150694E0941N_1,lyr_L150695E0940N_2,lyr_L150695E0941N_3,lyr_COTA_4,lyr_San_Antonio_5];
lyr_COTA_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'COTA': 'COTA', });
lyr_San_Antonio_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_COTA_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'COTA': 'TextEdit', });
lyr_San_Antonio_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_COTA_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'COTA': 'no label', });
lyr_San_Antonio_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_San_Antonio_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});