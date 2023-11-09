const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        },
        {
            title: 'Date',
            name: 'date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'content',
            title: 'Article',
            type: 'array',
            of: [
                { type: 'block' },
                {
                  type: 'image',
                  fields: [
                    { name : 'alt',
                      title: 'Alt',
                      type: 'string',
                    }
                  ],
                  options: {
                    hotspot: true
                  }
                },
            ],
        },
    ],
};

export default project;
