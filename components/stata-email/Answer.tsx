'use client';

import React, { useState } from 'react';
import type { FC } from 'react';

interface Person {
  id: string;
  name: string;
  email: string;
  location: string;
  messages: Array<{
    date: string;
    subject: string;
    content: string;
    from: string;
    to: string;
    sentVia?: string;
  }>;
  timelineEvents: Array<{
    date: string;
    type: 'import' | 'mailing-add';
    email: string;
    list: string;
  }>;
}

interface TimelineEvent {
  type: 'import' | 'mailing-add';
  email: string;
  list: string;
}

const PEOPLE: Person[] = [
  {
    id: '1',
    name: 'David Walters',
    email: 'david.walters@example.com',
    location: 'New York, USA',
    messages: [
      {
        date: '2 Dec 2024',
        subject: 'Proposal Review',
        content: `I've reviewed your proposal and would be happy to discuss the details.
                Available for a call tomorrow afternoon or Friday morning.

                A few quick points I'd like to clarify:

                - Current marketing strategy
                - Budget expectations
                - Timeline for implementation
                - KPIs and reporting structure

                Let me know what time works best for you.

                Best regards,
                David`,
        from: 'David Walters',
        to: 'me',
      }
    ],
    timelineEvents: [
      {
        date: '3 Dec 2024',
        type: 'mailing-add',
        email: 'david.walters@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '4 Dec 2024',
        type: 'mailing-add',
        email: 'david.walters@example.com',
        list: 'Roofing #1'
      },
      {
        date: '4 Dec 2024',
        type: 'import',
        email: 'david.walters@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '2',
    name: 'Sara Hart',
    email: 'sara.hart@example.com',
    location: 'Los Angeles, USA',
    messages: [
      {
        date: '3 Dec 2024',
        subject: 'Re: Business Proposal',
        content: `Sounds promising!
            When would be a good time for you to discuss the details?

            Regards,
            Sarah`,
        from: 'Sara Hart',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '4 Dec 2024',
        type: 'mailing-add',
        email: 'sara.hart@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '5 Dec 2024',
        type: 'mailing-add',
        email: 'sara.hart@example.com',
        list: 'Roofing #1'
      },
      {
        date: '7 Dec 2024',
        type: 'import',
        email: 'sara.hart@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '3',
    name: 'Sales | RGF Home De...',
    email: 'sales@rgf.com',
    location: 'Honolulu, HI',
    messages: [
      {
        date: '5 Dec 2024',
        subject: 'Contact Information Request',
        content: `Hi Igor, please give me your contact information, like web site and full list of services you provide.

        Thank you. Regards, Olga`,
        from: 'Sales | RGF Home De...',
        to: 'me',
      }
    ],
    timelineEvents: [
      {
        date: '6 Dec 2024',
        type: 'mailing-add',
        email: 'sales@rgf.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '8 Dec 2024',
        type: 'mailing-add',
        email: 'sales@rgf.com',
        list: 'Roofing #1'
      },
      {
        date: '9 Dec 2024',
        type: 'import',
        email: 'sales@rgf.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '4',
    name: 'Christopher',
    email: 'christopher@example.com',
    location: 'Chicago, USA',
    messages: [
      {
        date: '7 Dec 2024',
        subject: 'Re: Business Proposal',
        content: `Yes, definitely interested.`,
        from: 'Christopher',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '8 Dec 2024',
        type: 'mailing-add',
        email: 'christopher@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '8 Dec 2024',
        type: 'mailing-add',
        email: 'christopher@example.com',
        list: 'Roofing #1'
      },
      {
        date: '10 Dec 2024',
        type: 'import',
        email: 'christopher@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '5',
    name: 'Mona Stillwell',
    email: 'mona.stillwell@hipporoofing.com',
    location: 'Melbourne, FL 32935',
    messages: [
      {
        date: '10 Dec 2024',
        subject: 'Re: Lead Generation Inquiry',
        content: `Hello Liam,

        Let me know if you could chat today? Im interested in leads. Thanks

        Mona Stillwell
        𝓜𝓸𝓷𝓪 𝓢𝓽𝓲𝓵𝓵𝔀𝓮𝓵𝓵
        Marketing & Communications Manager

        Hippo Roofing LLC
        2774 North Harbor Blvd
        Melbourne, FL 32935
        P: 321-951-2500 x106`,
        from: 'Mona Stillwell',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '11 Dec 2024',
        type: 'mailing-add',
        email: 'mona.stillwell@hipporoofing.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '11 Dec 2024',
        type: 'mailing-add',
        email: 'mona.stillwell@hipporoofing.com',
        list: 'Roofing #1'
      },
      {
        date: '13 Dec 2024',
        type: 'import',
        email: 'mona.stillwell@hipporoofing.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '6',
    name: 'Jennifer Walton',
    email: 'jennifer.walton@example.com',
    location: 'Boston, USA',
    messages: [
      {
        date: '12 Dec 2024',
        subject: 'Re: Business Proposal',
        content: `Thank you for reaching out.

        I've reviewed your proposal and would be very interested in discussing this further. Could we schedule a call for tomorrow afternoon?

        Kind regards,
        Jennifer`,
        from: 'Jennifer Walton',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '13 Dec 2024',
        type: 'mailing-add',
        email: 'jennifer.walton@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '13 Dec 2024',
        type: 'mailing-add',
        email: 'jennifer.walton@example.com',
        list: 'Roofing #1'
      },
      {
        date: '15 Dec 2024',
        type: 'import',
        email: 'jennifer.walton@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '7',
    name: 'Aleksandr Bulatov',
    email: 'aleksandr.bulatov@frars.com',
    location: 'Chisinau, Moldova',
    messages: [
      {
        date: '15 Dec 2024',
        subject: 'Re: Services Information',
        content: `Здравствуйте, Владислав!

        Спасибо за информацию и примеры ваших работ. Я заметила ваш энтузиазм. На данный момент наша компания находится на начальном этапе развития, мы открылись в январе этого года. Мы изучаем рынок услуг и ищем клиентов.

        Я помню о возможностях, которые вы предлагаете и если в этом возникнет необходимость, мы непременно обратимся в вашу компанию и обсудим сотрудничество и ваши услуги.

        Всего наилучшего,

        Мария Булатова (FRARS company)`,
        from: 'Aleksandr Bulatov',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '16 Dec 2024',
        type: 'mailing-add',
        email: 'aleksandr.bulatov@frars.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '17 Dec 2024',
        type: 'mailing-add',
        email: 'aleksandr.bulatov@frars.com',
        list: 'Roofing #1'
      },
      {
        date: '20 Dec 2024',
        type: 'import',
        email: 'aleksandr.bulatov@frars.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '8',
    name: 'Mary Shafran',
    email: 'mary.shafran@example.com',
    location: 'USA',
    messages: [
      {
        date: '15 Dec 2024',
        subject: 'Re: Service Inquiry',
        content: `Hello Ivan!

        Thank you for your letter!
        Do you create websites or/and promote them?
        Is there any difference in which platform the website was created on? (Tilda)
        What are the results for your previous customers, and what are your terms (prices)?`,
        from: 'Mary Shafran',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '16 Dec 2024',
        type: 'mailing-add',
        email: 'mary.shafran@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '18 Dec 2024',
        type: 'mailing-add',
        email: 'mary.shafran@example.com',
        list: 'Roofing #1'
      },
      {
        date: '20 Dec 2024',
        type: 'import',
        email: 'mary.shafran@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '9',
    name: 'info@knowaguyroofing....',
    email: 'info@knowaguyroofing.com',
    location: 'USA',
    messages: [
      {
        date: '18 Dec 2024',
        subject: 'Re: Marketing Proposal',
        content: `Sure
        Best,
        Brock
        614.563.7594

        On Nov 14, 2024, at 7:29PM, Olena <olena@advant`,
        from: 'info@knowaguyroofing....',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '19 Dec 2024',
        type: 'mailing-add',
        email: 'info@knowaguyroofing.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '20 Dec 2024',
        type: 'mailing-add',
        email: 'info@knowaguyroofing.com',
        list: 'Roofing #1'
      },
      {
        date: '21 Dec 2024',
        type: 'import',
        email: 'info@knowaguyroofing.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '10',
    name: 'Bondarenko Vitaly',
    email: 'vitaly.bondarenko@example.com',
    location: 'Ukraine',
    messages: [
      {
        date: '20 Dec 2024',
        subject: 'Current Topics Discussion',
        content: `Привіт Marko,

        Актуальні теми на сьогодні
        Translations (Оновлення сайту)
        Social media
        email marketing
        exhibition

        -Потрібно розуміння принципу співпраці: доступ до наших ресурсів?
        -Ціни для аналізу: найманий працівник чи ваша агенція ?
        -Пропозиції англ. мовою також.

        Бажано прояснити ці пункти до понеділка.
        З найкращими побажаннями
        Віталій Бондаренко`,
        from: 'Bondarenko Vitaly',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '21 Dec 2024',
        type: 'mailing-add',
        email: 'vitaly.bondarenko@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '25 Dec 2024',
        type: 'mailing-add',
        email: 'vitaly.bondarenko@example.com',
        list: 'Roofing #1'
      },
      {
        date: '25 Dec 2024',
        type: 'import',
        email: 'vitaly.bondarenko@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '11',
    name: 'Anatolii Salomatin',
    email: 'anatolii.salomatin@example.com',
    location: 'Ukraine',
    messages: [
      {
        date: '23 Dec 2024',
        subject: 'Re: Discussion',
        content: `Здравствуйте 7205791402 Анатолий, можем обсудить`,
        from: 'Anatolii Salomatin',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '24 Dec 2024',
        type: 'mailing-add',
        email: 'anatolii.salomatin@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '26 Dec 2024',
        type: 'mailing-add',
        email: 'anatolii.salomatin@example.com',
        list: 'Roofing #1'
      },
      {
        date: '27 Dec 2024',
        type: 'import',
        email: 'anatolii.salomatin@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '12',
    name: 'info',
    email: 'info@example.com',
    location: 'Unknown',
    messages: [
      {
        date: '25 Dec 2024',
        subject: 'Re: Service Inquiry',
        content: `Добрый день. Мое имя Игорь. Я владелец бизнеса. Меня интересует Ваше предложение. Какие Ваши услуги и сколько это стоит?`,
        from: 'info',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '26 Dec 2024',
        type: 'mailing-add',
        email: 'info@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '28 Dec 2024',
        type: 'mailing-add',
        email: 'info@example.com',
        list: 'Roofing #1'
      },
      {
        date: '30 Dec 2024',
        type: 'import',
        email: 'info@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '13',
    name: 'David P',
    email: 'david.p@example.com',
    location: 'USA',
    messages: [
      {
        date: '28 Dec 2024',
        subject: 'Re: Business Ideas',
        content: `Hi Marko,

        Thanks for your message. I'm intrigued by your ideas.
        Can you tell me more about what you have in mind?

        Best,
        David`,
        from: 'David P',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '29 Dec 2024',
        type: 'mailing-add',
        email: 'david.p@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '1 Dec 2024',
        type: 'mailing-add',
        email: 'david.p@example.com',
        list: 'Roofing #1'
      },
      {
        date: '1 Jan 2025',
        type: 'import',
        email: 'david.p@example.com',
        list: 'Roofing USA 926'
      }
    ]
  },
  {
    id: '14',
    name: 'Volos Beauty Salon',
    email: 'volos.beauty@example.com',
    location: 'Ukraine',
    messages: [
      {
        date: '30 Dec 2024',
        subject: 'Re: Proposal Information',
        content: `Добрый день Диана,

        Мы бы хотели узнать больше о вашем предложении.

        Спасибо

        Иван и Диана`,
        from: 'Volos Beauty Salon',
        to: 'me'
      }
    ],
    timelineEvents: [
      {
        date: '30 Dec 2024',
        type: 'mailing-add',
        email: 'volos.beauty@example.com',
        list: 'Roofing #1 - copy'
      },
      {
        date: '1 Jan 2025',
        type: 'mailing-add',
        email: 'volos.beauty@example.com',
        list: 'Roofing #1'
      },
      {
        date: '1 Jan 2025',
        type: 'import',
        email: 'volos.beauty@example.com',
        list: 'Roofing USA 926'
      }
    ]
  }
];

const timelineEvents: TimelineEvent[] = [
  {
    type: 'mailing-add',
    email: 'info@resetroofing.com',
    list: 'Roofing #1 - copy'
  },
  {
    type: 'mailing-add',
    email: 'info@resetroofing.com',
    list: 'Roofing #1'
  },
  {
    type: 'import',
    email: 'info@resetroofing.com',
    list: 'Roofing USA 926'
  }
];

const Answer: FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person>(PEOPLE[0]);

  return (
    <div className="flex">
      <div className="w-[400px] border-r pt-6 px-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Contacts</h1>
          <div className="flex gap-2">
            <button className="text-gray-400">
              <span className="text-2xl">+</span>
            </button>
            <button className="text-gray-400">⋯</button>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="h-[calc(100vh-210px)] overflow-y-auto pr-2">
          <div className="space-y-2">
            {PEOPLE.map((person, index) => (
              <div key={person.id}>
                <button
                  onClick={() => setSelectedPerson(person)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedPerson.id === person.id
                      ? 'bg-gray-50 text-gray-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{person.name}</div>
                  <div className="text-sm text-gray-500">{person.email}</div>
                  <div className="text-sm text-gray-500">{person.location}</div>
                </button>
                {index < PEOPLE.length - 1 && (
                  <div className="mx-2 border-b border-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 pt-6 px-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Recent Activity</h2>
            <button>🔄</button>
          </div>
          
          <div className="flex gap-4 border-b">
            <button className="text-gray-600 border-b-2 border-gray-600 pb-2">
              📝 Add note
            </button>
            <button className="text-gray-600">
              ✉️ Send email
            </button>
            <button className="text-gray-600">
              👥 Send LinkedIn message
            </button>
          </div>
          
          <div className="text-gray-400 mt-4">
            Click here to take notes...
          </div>
        </div>

        <div className="relative h-[calc(100vh-250px)]">
            
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-8 h-full overflow-y-auto pr-4">
            {selectedPerson.messages.map((message) => (
              <div key={message.date} className="relative pl-8">
                <div className="absolute mt-14 left-[17px] -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div className="text-sm text-gray-500 mb-4">{message.date}</div>
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-lg">+</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      To address {message.to} was <span className="text-green-600 font-medium">Delivered</span>
                    </div>
                  </div>
                </div>

                <div className="absolute mt-14 left-[17px] -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div className="text-sm text-gray-500 mb-4">{message.date}</div>

                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">{message.subject}</div>
                      <div className="text-sm text-gray-500">
                       <span className="text-gray-800 font-medium mr-1">To:</span>  {message.to} <span className="text-gray-600 font-medium ml-8 mr-1">From:</span> {message.from}
                      </div>
                    </div>
                    <button className="text-gray-400">↩️</button>
                  </div>
                  <div className="text-gray-600 mb-4 whitespace-pre-line">
                    {message.content}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex gap-2">
                      <button>✉️</button>
                      <button>🔗</button>
                    </div>
                    {message.sentVia && <div className="text-gray-500">Sent via: {message.sentVia}</div>}
                  </div>
                </div>
              </div>
            ))}

            {selectedPerson.timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute mt-14 left-[17px] -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div className="text-sm text-gray-500 mb-4">{event.date}</div>
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600">
                        {event.type === 'import' ? '+' : '✉️'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.type === 'import' ? (
                        <>
                          You imported this contact from file to list <span className="text-green-500">{event.list}</span>
                        </>
                      ) : (
                        <>
                          Address {event.email} was added to mailing list <span className="text-green-500">{event.list}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
