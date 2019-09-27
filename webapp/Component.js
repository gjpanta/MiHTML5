jQuery.sap.declare("cus.crm.opportunity.zCRM_OPPRTNTYExtension1.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cus.crm.opportunity",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/CRM_OPPRTNTY"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
 
this.cus.crm.opportunity.Component.extend("cus.crm.opportunity.zCRM_OPPRTNTYExtension1.Component", {
	metadata: {
		manifest: "json"
	}
});