sap.ui.jsview("views.index", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf WEB-INF.index
	*/ 
	getControllerName : function() {
		return "views.index";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf WEB-INF.index
	*/ 
	createContent : function(oController) {
		var aControls = [];
		
		//Vista de materiales - principal
		var viewMateriales = sap.ui.view({
			id: this.createId("matView"), 
			viewName: "views.material", 
			type: sap.ui.core.mvc.ViewType.JS});
		
		//Se crea el shell principal de la aplicación
		mSettings =  {
		        appTitle: "SAV - Sistema de Administración de Ventas",
		        //appIcon: "images/SAPLogo.gif",
		        //appIconTooltip: "SAP logo",
		        showLogoutButton: true,
		        showSearchTool: false,
		        showInspectorTool: false,
		        showFeederTool: false,
		        worksetItems: [new sap.ui.ux3.NavigationItem("WI_home",{key:"wi_home",text:"Productos"})
		                      ,new sap.ui.ux3.NavigationItem("WI_1",{key:"wi_1",text:"Consultas", subItems:[
		                           new sap.ui.ux3.NavigationItem("WI_1_1",{key:"wi_1_1",text:"Precios x cátalogo"})]})
		                       //   new sap.ui.ux3.NavigationItem("WI_1_2",{key:"wi_1_2",text:"Button"}),
		                       //   new sap.ui.ux3.NavigationItem("WI_1_3",{key:"wi_1_3",text:"Image"})]}),
		                       //new sap.ui.ux3.NavigationItem("WI_API",{key:"wi_api",text:"API Documentation"})
		        			   ],
		        //paneBarItems: [ new sap.ui.core.Item("PI_Date",{key:"pi_date",text:"date"}),
		        //                new sap.ui.core.Item("PI_Browser",{key:"pi_browser",text:"browser"})],-->
		        content: viewMateriales ,
//		        toolPopups: [new sap.ui.ux3.ToolPopup("contactTool",{
//		                                                                title: "New Contact",
//		                                                                tooltip: "Create New Contact",
//		                                                                icon: "images/Contact_regular.png",
//		                                                                iconHover: "images/Contact_hover.png",
//		                                                                content:[new sap.ui.commons.TextView({text:"Here could be a contact sheet."})],
//		                                                                buttons: [new sap.ui.commons.Button("cancelContactButton", {text:"Cancel",press:function(oEvent){
//		                                                                        sap.ui.getCore().byId("contactTool").close();
//		                                                                }})]
//		                                                        })],
//		        headerItems: [new sap.ui.commons.TextView({text:"User Name",tooltip:"U.Name"}),
//		                      new sap.ui.commons.Button({text:"Personalize",tooltip:"Personalize",press:function(oEvent){alert("Here could open an personalize dialog");}}),
//		                                                                new sap.ui.commons.MenuButton({
//		                                                                        text: "Help",
//		                                                                        tooltip: "Help Menu",
//		                                                                        menu: new sap.ui.commons.Menu("menu1",{items:[
//		                                                                                new sap.ui.commons.MenuItem("menuitem1",{text:"Help"}),
//		                                                                                new sap.ui.commons.MenuItem("menuitem2",{text:"Report Incident"}),
//		                                                                                new sap.ui.commons.MenuItem("menuitem3",{text:"About"})]})
//		                                                                })],
		        worksetItemSelected: oController.workItemSelected,
		        paneBarItemSelected: oController.paneBarItemSelected,
		        logout: oController.logout,
		        search: oController.search,
		        feedSubmit: oController.feedSubmit,
		        paneClosed : oController.paneClosed
		};
		var shell = new sap.ui.ux3.Shell(this.createId("shell"), mSettings);
		aControls.push(shell);
//		//Se crea botón de prueba
//		var oButton = new sap.ui.commons.Button({
//			id : this.createId("MyButton"),
//			text : "Hello JS view"
//		});
//		aControls.push(oButton.attachPress(oController.doIt));
		return aControls;
	}

});
