sap.ui.controller("views.consultas.listaPrecios", {
	getCatalogos : function(cbCatalogos) {
		// Se manda llamar la función en el backend
		$.ajax({
			url : "/savServer/Catalogo",
			dataType : 'json',
			success : function(data, textStatus, xhr) {
				// Create a model and bind the table rows to this model
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData({
					modelData : data
				});
				cbCatalogos.setModel(oModel);
				var oItemTemplate1 = new sap.ui.core.ListItem();
				oItemTemplate1.bindProperty("text", "descripcion");
				oItemTemplate1.bindProperty("key", "id");
				cbCatalogos.bindItems("/modelData", oItemTemplate1);
				
			},
			error : function(xhr, textStatus, errorThrown) {
				alert("error: " + errorThrown);
			},
		});
		sap.ui.core.BusyIndicator.hide();
		return [];
	}
	,
	getPrecios : function() {
		var matPrecios = this.byId("matPrecios");
		var cat = this.byId("ComboBoxCat").getSelectedKey();
		//Se valida que se tnga un valor seleccionado
		if(!cat || cat.length == 0 ) {
			alert("Debes seleccionar un catalogo");
			return [];
		}
		matPrecios.setBusy(true);//Indicador de que esta cargando
		// Se manda llamar la función en el backend
		$.ajax({
			url : "/savServer/Consulta/precios",
			dataType : 'json',
			data: { catalogo: cat },
			success : function(data, textStatus, xhr) {
				// Create a model and bind the table rows to this model
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData({
					modelData : data
				});
				matPrecios.setModel(oModel);
				matPrecios.bindRows("/modelData");	
				matPrecios.setBusy(false);
			},
			error : function(xhr, textStatus, errorThrown) {
				alert("error: " + errorThrown);
			},
		});
		return [];
	}
	,
	/**
	 * Función para crear una columna
	 * @param id 	Identificador de la columna
	 * @param des	Encabezado columna
	 * @param size	Tamaño
	 * @returns {sap.ui.table.Column}
	 */
	createColumn : function(id,des,size) {

		var column = new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : des
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",id),
			sortProperty : id,
			filterProperty : id,
			width : size
		});
		return column;
	},
	/**
	 * Función para crear una columna
	 * @param id 	Identificador de la columna
	 * @param des	Encabezado columna
	 * @param size	Tamaño
	 * @returns {sap.ui.table.Column}
	 */
	createColumnPrec : function(id,des,size) {

		var column = new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : des
			}),
			template : new sap.ui.commons.TextView({textAlign:sap.ui.core.TextAlign.Right})
						.bindProperty("text",id,new sap.ui.model.type.Float({
				minFractionDigits: 2,
	            maxFractionDigits: 2,
	            decimalSeparator: ".",
	            groupingSeparator: ","
			})),
			sortProperty : id,
			filterProperty : id,
			width : size,
		});
		return column;
	},
	
	/**
	 * Función cuando le das clic al botón de Buscar de la página principal
	 */
	buscaCatPrecios: function() {
		var oController = sap.ui.getCore().byId("indexV1--consultaPreciosView").getController();
		// Se obtienen los materiales
		oController.getPrecios();		
	}
	,

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.consultas.listaPrecios
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.consultas.listaPrecios
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.consultas.listaPrecios
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.consultas.listaPrecios
*/
//	onExit: function() {
//
//	}

});