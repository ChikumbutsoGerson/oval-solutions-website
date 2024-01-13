export default { 
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        { 
            name: 'name',
            type: 'string',
            title: 'Service Name',
        },
        { 
            name: 'description',
            type: 'string',
            title: 'Service Description',
        },
  
        {
            name: 'serviceImage',
            title: 'Service Image',
            type: 'image',
            options: {
                hostpot: 'true'
            }  
        }
    ]
}