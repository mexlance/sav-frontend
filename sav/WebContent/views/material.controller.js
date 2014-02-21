sap.ui.controller("views.material", {	/**
										 * Función para obtener los materiales
										 * del backend
										 */
	getMateriales : function() {

		var matTable = this.byId("matTable");

		// Se manda llamar la función en el backend
		$.ajax({
			url : "/savServer/Material",
			dataType : 'json',
			success : function(data, textStatus, xhr) {
				// Create a model and bind the table rows to this model
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData({
					modelData : data
				});
				matTable.setModel(oModel);
				matTable.bindRows("/modelData");
			},
			error : function(xhr, textStatus, errorThrown) {
				alert("error: " + errorThrown);
			},
		});
		return [];
	},

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
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf views.material
 */
// onInit: function() {
//
// },
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf views.material
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf views.material
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf views.material
 */
// onExit: function() {
//
// }
});