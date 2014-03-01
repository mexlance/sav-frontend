sap.ui.jsview("views.material", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf views.material
	 */
	getControllerName : function() {
		return "views.material";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf views.material
	 */
	createContent : function(oController) {
		
		//Array con nuestros controles
		var aControls = [];
		
		// Se crea el objeto que almacenará los materiales
		var mSettings = {
			title : "Consulta ID",
			visibleRowCount : 23,
			firstVisibleRow : 1,
			selectionMode : sap.ui.table.SelectionMode.Single
		};
		var oTable = new sap.ui.table.Table(this.createId("matTable"), mSettings);
		//Definición de las columnas 
		oTable.addColumn(oController.createColumn("mat_id","ID","100px"));//Material
		oTable.addColumn(oController.createColumn("mat_des","Descripción","200px"));//Descripción
		oTable.addColumn(oController.createColumn("mat_marca","Marca","150px"));//Marca
		oTable.addColumn(oController.createColumn("mat_modelo","Modelo","100px"));//Modelo
		
		// Se obtienen los materiales
		oController.getMateriales();
		aControls.push(oTable);
		return aControls;
	}

});
