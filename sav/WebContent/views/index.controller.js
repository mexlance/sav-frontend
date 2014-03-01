sap.ui.controller("views.index", {
	
	doIt: function(oEvent) {
		alert(oEvent.getSource().getId() + "does IT");
	},

	workItemSelected: function(oEvent) {
		//Estas dentro del objeto como tal de shell
        var sId    = oEvent.getParameter("id");
        var oShell = oEvent.oSource;
        var oCore  = sap.ui.getCore();
        
        switch (sId) {
        case "WI_home":
        		var viewMaterialesIn = oCore.byId("indexV1--matView");
                oShell.setContent(viewMaterialesIn);
                break;
        case "WI_1_1":
        		//Se obtiene la vista, si no existe se crea
        		var viewConsultaPrecios = sap.ui.getCore().byId("indexV1--consultaPreciosView");
        		if(viewConsultaPrecios == null){
        			viewGral = oCore.byId("indexV1");
        			viewConsultaPrecios= sap.ui.view({
                		id: viewGral.getController().createId("consultaPreciosView"), 
                		viewName: "views.consultas.listaPrecios", 
                		type: sap.ui.core.mvc.ViewType.JS});
        		}
        		oShell.setContent(viewConsultaPrecios);
        		break;
        case "WI_1_2":
                oShell.setContent(oButton);
                break;
        case "WI_1_3":
                oShell.setContent(oImage);
                break;
        case "WI_API":
                oShell.setContent(oAPI);
                break;
        default:
                break;
        }
	},
	
	paneBarItemSelected: function(oEvent) {
		var sKey = oEvent.getParameter("key");
        var oShell = oEvent.oSource;
        switch (sKey) {
        case "pi_date":
                var oDate = new Date();
                oShell.setPaneContent(new sap.ui.commons.TextView({text:oDate.toLocaleString()}), true);
                break;
        case "pi_browser":
                oShell.setPaneContent(new sap.ui.commons.TextView({text:"You browser provides the following information:\n"+navigator.userAgent}), true);
                break;
        default:
                break;
        }
	},
	
	logout: function(oEvent) {
		alert("Logout Button has been clicked.\nThe application can now do whatever is required.");
	},
	
	search: function(oEvent){
        alert("Search triggered: " + oEvent.getParameter("text"));
    },
    
    feedSubmit: function(oEvent){
        alert("Feed entry submitted: " + oEvent.getParameter("text"));
    },
    
    paneClosed : function(oEvent) {
        alert("Pane has been closed: " + oEvent.getParameter("id"));
    }

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf WEB-INF.index
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf WEB-INF.index
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf WEB-INF.index
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf WEB-INF.index
*/
//	onExit: function() {
//
//	}

});