self.onInit = function() {
    
    const $injector = self.ctx.$scope.$injector;
    const deviceService = $injector.get(self.ctx.servicesMap.get('deviceService'));
        
//'http://localhost:8080/api/plugins/telemetry/DEVICE/00ba9a90-ec42-11ee-8cf2-131ca58248f9/values/attributes/SHARED_SCOPE' \
    const pageLink = self.ctx.pageLink(10, 0); // use swagger docs on pagelinks
    
    
    const deviceId = '8719d460-e94b-11ee-bb6e-4b8f317c2937'; 
    
    deviceService.getDevice(deviceId).subscribe(
      (resp) => {
          self.ctx.$scope.data = resp 
          console.log("AAA",resp)
        // resp.data.forEach((sensor)=>{
        //       console.log('Tenant Device Infos:', sensor);
        //   })
        
      }
    );
    
    const attributeService = $injector.get(self.ctx.servicesMap.get('attributeService'));
    
    const entityId={
    "id": "00ba9a90-ec42-11ee-8cf2-131ca58248f9",
    "entityType": "DEVICE"
    }


        const attributeScope = 'SHARED_SCOPE'; // SERVER_SHARED / XXX_SHARED - use Swagger docs on that
        attributeService.getEntityAttributes(entityId, attributeScope).subscribe(
          (data) => {
            console.log('Entity Attributes:', data);
          }
        );
    

}


self.onDestroy = function() {}

self.onDataUpdated = function() {
    self.ctx.detectChanges();
}