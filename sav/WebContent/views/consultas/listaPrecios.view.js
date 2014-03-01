sap.ui.jsview("views.consultas.listaPrecios", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf views.consultas.listaPrecios
	*/ 
	getControllerName : function() {
		return "views.consultas.listaPrecios";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf views.consultas.listaPrecios
	*/ 
	createContent : function(oController) {
		
		//Array con nuestros controles
		var aControls = [];
		
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true
			, width: '380px', columns: 2});
		oMatrix.setWidths('80px', '300px');
		
		//Se crea el combo box de selección de catalogo
		var oComboBoxCat = new sap.ui.commons.ComboBox(this.createId("ComboBoxCat"));
		oComboBoxCat.setTooltip("Selecciona un Cátalogo");
		oComboBoxCat.setEditable(true);
		oComboBoxCat.setName("comboCatalogo");
		
		//Se añade etiqueta
		var oLabelComboCat = new sap.ui.commons.Label(this.createId("lComboCat"),
				{ text: "Cátalogo:", labelFor: oComboBoxCat});

		//Se añade registro 
		oMatrix.createRow(oLabelComboCat, oComboBoxCat);

		//Create a standard divider
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 2});
		oCell.addContent(new sap.ui.commons.HorizontalDivider());
		oMatrix.createRow(oCell);
		
		//Create a button row
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 2});
		var oButton = new sap.ui.commons.Button({text: 'Consultar'});
		oButton.addStyleClass("CustomMargin"); //Add some additional left margin
		oButton.attachPress(oController.buscaCatPrecios);
		oCell.addContent(oButton);
		oMatrix.createRow(oCell);
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 2});
		oMatrix.createRow(oCell);
		
		// Attach the ComboBox to the page
		aControls.push(oMatrix);

		sap.ui.core.BusyIndicator.show(1);  
		//Se envía la carga de cátalogos
		oController.getCatalogos(oComboBoxCat);
		
		// Se crea el objeto que almacenará los materiales
		var mSettings = {
			title : "",
			visibleRowCount : 23,
			firstVisibleRow : 1,
			selectionMode : sap.ui.table.SelectionMode.Single
		};
		var oTable = new sap.ui.table.Table(this.createId("matPrecios"), mSettings);
		//Definición de las columnas 
		oTable.addColumn(oController.createColumn("material","ID","100px"));//Material
		oTable.addColumn(oController.createColumnPrec("precioContado","Contado","100px"));//Descripción
		oTable.addColumn(oController.createColumnPrec("precioPagos","Pagos","100px"));//Marca
		oTable.addColumn(oController.createColumn("pagina","Página","100px"));//Modelo
		oTable.addColumn(oController.createColumn("ubicacion","Ubicación","100px"));//Modelo
				
		aControls.push(oTable);
		return aControls;
	}

});
