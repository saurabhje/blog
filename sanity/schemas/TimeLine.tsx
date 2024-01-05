const timeLine = {
    name: 'timeline',
    title: 'Timeline',
    type: 'document',
    fields: [
        {
            title: 'Year',
            name: 'year',
            type: 'number',
        },
        {
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'array', 
                            of: [{type: 'block'}]
                        },
                    ],
                },
            ],
        },
    ],
};

export default timeLine;
