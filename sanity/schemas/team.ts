export default { 
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
        { 
            name: 'fullname',
            type: 'string',
            title: 'Full Name',
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position',
         
        },
        {
            name: 'brief',
            type: 'string',
            title: 'Brief Description',
         
        },
        {
            name: 'memberImage',
            title: 'Member Image',
            type: 'image',
            options: {
                hostpot: 'true'
            }  
        }
    ]
}