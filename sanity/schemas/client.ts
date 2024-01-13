export default { 
    name: 'client',
    type: 'document',
    title: 'Client',
    fields: [
        { 
            name: 'name',
            type: 'string',
            title: 'Client Name',
        },
        {
            name: 'clientLogo',
            title: 'Client Image',
            type: 'image',
            options: {
                hostpot: 'true'
            }  
        }
    ]
}