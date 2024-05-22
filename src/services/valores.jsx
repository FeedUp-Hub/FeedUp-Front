const valores = [
    { id: 1, value: "Se importa e cuida de todas as pessoas da comunidade.", image: 'https://s3-alpha-sig.figma.com/img/8039/9622/14e8c3861c96e0387cb58295f145f173?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DEgkrc1maRynJLtSdGbFqNtE1We-X~7-zpzwlnKBnSo4AETZGuLKZH0~IDfIzuwdewNvJSjeEeIQURnPTOznuXbgwcXUKTFb4Y8TYkfccP4yCo3-tTCpTfYM~KG27HNVpY8yEQMCK59I9GL58dV9SHRxX-MMWhoAF1GNSwvbYvZhAEOAL2csXAy9Ez-CpO8kLCryRp4jlw5aKRLPVuCqdMi6YZXor6xUONAGt9g5L~2ZWOvUjEy~YrLoS5nB1k1RJudMFn2dQAwNKXcAg1SPFVrv~FSSdB8UMNJtn1guPqZV5KEu8zycN6b~oGPk~mLBzUIOc5xF~9-MYHs-nPYYgA__' },
    { id: 2, value: "Tem a capacidade de dialogar com pares, liderados e lideranças sobre estratégias, metas e o que é necessário para alcançá-las.", image: 'https://s3-alpha-sig.figma.com/img/4095/e939/b91f5db679ae77eb02a23a67e7b1d641?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dd88hW7o7wBtqx2F82i~3CfZI78iv9EfAt89bJS~AkcdvpaHEXwEH9lfpmkix6x-ZYYaZn4CyyKOE6DWfaNJvRhjfkgBxo2stUtPhNqOlpLoZBCAP4ZcrMu1zMYxhZPzNuUBLOGCB7CKecO48B-Z4XJc5w9Ke27uVZDeFdEfLBhtshxKOsAj2kQNOyWOIuYVjxrB-mjtoPzagqAhjajqVDFajCe1VoiDSNlu2JDV7GlnPhSjnBCUm6BO5MeDvBaSGrLcvrbvNLVmg5CkQI-qNnAJEp~hMC1uolZFwJdCYFwevxuwpAYXk6fzYZDPwjd16ywuBbs-V~3LPoTJ5fUJAQ__' },
    { id: 3, value: "Reconhece, respeita e empodera o bom trabalho e empenho dos colegas em todas as esfera.", image: 'https://s3-alpha-sig.figma.com/img/f7e0/3ba9/3d634158ff7291feb2df42289f700a39?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKBYvcusHwaPdxPu-NUXPO44Rk-3PMYgZV9FJErxDgukhBBHC6AkdH0Dh~Ulpt4Xw6xKr5eo52~UWDZB1sUpplzM-nba1VzdfYEq7397Wedt2wXZBH1CrNsA239AwkBqNAjJk01n8PbVbt8IyzUk9vneua8hx-BaqMAr5uxa1GummRPvJzN5YyE7eA-A3M-pFXotEivhk0TYnzg6YCxMGXjTrFE02q~jgb5yc6-gjkN1bp6CRMzmnbNDaXfFVc5HlUNi5b9FjLiSKUYJdnUQ8RZq9uWskJQDGGyoyj~mv8Y8Ptw2EQEtw7IyM4DQYQe5QSp01aZtUwWjznGywdivbg__' },
    { id: 4, value: "Aposta na ideia que estar na ioasys significa transformar o mundo.", image: 'https://s3-alpha-sig.figma.com/img/9621/9e7a/c7e5c5b5449cb8a829f13565a242bb59?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lG7O4SvkmlonhwAcEJsCAycalmdX-Fw8qPkKtPN4fdePSk1Gp5oU3smGXn-ybw-CUzpmqidlQ8gElvP0Jfp4Ajv~OyTpc89EEv3vuvqGA8~1YCh-2IVRvx0pVm0kPNVpaCfA3Ln4t6W7s0Rng2XjfGJAtwqvRVDubaqB6hBadnggei~~Wm7Cl3tKhz5B4ZNsxgtatyrvtgqQOQOVwIjpfwcOTWPqhnxYwZS3xFcr4MQhVRuNerWfnMI6Vpfc6th6PSa2QIYwM6zfqMSYid4-CUy1FOOVudtbef2PUOhRTtfF8KGVC4c4mXz22dyEtM6uUQ7eIcyiDG-OQxbsYbYFBA__' },
    { id: 5, value: "Traz as melhores práticas do mercado para dentro da ioasys, tornando-as ainda melhores dentro do nosso ecossistema.", image: 'https://s3-alpha-sig.figma.com/img/9fcf/6217/6db54ce4f420607449f9641e42492944?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f-42M~5QBwmliGGaEyz9Up9WaQHyI-FkEcyvDo3nu6b40qnhx-xprtLEVYbxZGZvqrU09MFE25kstpxnTrbM23AZbWXNgh4buM8K4Ja2fNaxaerPfDektd7c-1Q8Ez2hinpX3lyUmMOVYeO~xR-rzFOys~S3SBdsuC4K2fooE9CdBB0qVTXygbP1v-vrlPNtsQATrAbHcyj~oxJjAcE3EEsq-qFMKr~O13PnBKunMdpnRKZzpXp65K3YIOHx8IcacOwntZOTBY1WJyY97qDU5N1N-TEvxOMgvWVcDOj8JFYunAb~2y7T3cqU6GU7vli7sxSq~OKabyV5ciUtMftKfg__' },
    { id: 6, value: "Conduz a comunidade na direção do sucesso, sempre com muito engajamento e brilho no olho.", image: 'https://s3-alpha-sig.figma.com/img/6ba0/730a/b154c2aab53451ceb16a1092a953b39a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S6zcaFaZK75Tt5NShlPOKuMJT0M1pwLNyatFdkhOv1DoZSDZ9aA7xmCZYiXC5VlWzNBiAOlFxJtAwB2RCQu38s3eizNbolua36hI~W9QXOt7vB-ridOOaPWrQeYPwePRoTTqPEhgddD9MeX~pdt2jDDuytlF-m0LeRu4KhQF8B4Jd-QAg0dgqIwFy34xkOdRyy45O~fHyxeBO7ej1L6jljDv2djQB6xH1XKpuPrO5Pi8YJeiv-rwsXNVF9qaVmjDiKBcY6K-DOqPavTMU12sJSzaf--O55HJuqZvXFOLbm8ccPo-DpqAkj53~LT4ndUH-iokuA9n~i6~Y8kdK2vR-A__' },
    { id: 7, value: "Ajuda as pessoas a desenvolverem ainda mais as suas soft skills", image: 'https://s3-alpha-sig.figma.com/img/7779/c6f2/02be09743566c63a74f5194d4c138465?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xb9rSOsmmHYSUiW6iIZOEMpNyt63yXRcO~rbDZbyDjRT44qnuQzvRM6-OdppEDiOq2lQ8N6mUbajF19Msgiu~Gc0gJ3ZHbo0U-nx55CelkMTNRxAgxwzNmwwIcCpIEj96hij4s~tf-vOQkWw~ciKbp~4rQmJCLsstUhXcD~dcv66Wtp-w2Jazq0f~be6BY1~rWDMa45PIWXPthZHQAdYc6b6jiY86F1Gq52bqp-Cx34oRIZeOjeDXNZGhwk3SHcQJUFClbdvj~WZKYSPfeu9uQYYmB190TS1ozuG2gwhfjCl6TzxBadgB6RD5Tw8uwmeoXj5HlQ6n1S3fGTl69B1tw__' },
    { id: 8, value: "Se torna técnica e profissionalmente a cada dia mais forte.", image: 'https://s3-alpha-sig.figma.com/img/f824/2a77/b502ee54a7f70453f7d9e1109a42b0a0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWSjXrYrfiYqrjkcKJeKKPhmPzfsInAxVn2qxxYm43aligm~kbW2pyroarUL1TKkAmNA94xgj5K7Boq2Afgo2RWt4~AMVR7lu8o8GVgPaMlqe0NtPLJ2kKs9An1dAYPY5hhD2xab382nVs70IgtEOnesUTcmvDiKlQQvUrbgYqNNa03R5qjD0yVy1cng3FG~-NrMaudwguKQVAKbx0iWjoA6CtCDrilkDnSmfTXUWTEAuQZXf0pTdlZUqlhFBghKCX9uKUfnyZKbIfuKSRmuH6j8oWgtp978crP7KEz4C4uozFMcgP6QvFQehK9NC0Xvb~PNE1Y-KYtUpL9lvxzGew__' },
    { id: 9, value: "Mensura e acompanha todas as etapas de projetos e processos para garantir ajustes rápidos.", image: 'https://s3-alpha-sig.figma.com/img/9975/9a09/c218308a9aefcbab9eff826adac70978?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMPJ7Qrn6cCBxOLyA5TJd4xY3XKxY~TGCJAhkgWXi9MGUesMbk~-V2b-Etzn27opliTidRhxF9Pc--cVzB4M7w5DeiGeLXOyxsloFONJINHRsgtNcCZVlrGokRPqNBmYpf1~TYucC3Oisst9Xs6FprQqfTHoHJgkIZhsIqEgE9SG654F02M9nPfunqUW5fu4W~WA6NgRsDUxN-DEUguUKGc-AziTmE8seEwyOPOYRRMOGM9tcLko9-Ps51Ox~TWmlko6kAVc75gdDLrVYG-KgSghRstzfRm2l2WvuLm4n~745GjCOAX18psiR6Erh76NdAvqObAa6yf~Fv25nm4-7Q__' },
    { id: 10, value: "Busca conhecer e agir de forma ética, respeitando todos os princípios de governança da ioasys e do grupo Alpargatas", image: 'https://s3-alpha-sig.figma.com/img/4820/220f/0046ae832be79eed781bb5360dc9fe67?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOB5jLLThfi795xNVlF~xlewz0y2z3JselZIp8n7R18N0s-S6~rQea4uqMOeYchPvOWDsHCRpAWt~AFGXOgc5O1jD6VSSQOhjCUtVXkNblyvGssC1nHt-IHgrxBzDaZ6FW5aj~vW5LCiWi33Go8Dvtps8sUKcbuQT6vNXCzztwHoZQ7KXlaklVW~VvATdjzYNBQ8Plbd6xkvv3b29AvuavmP7RNy~Xrz0fzRPSDhWljP0ILfxk4TFzHkDMx-YBUwTP3vvgwCMhYO44wQx~hqzbBuzsChxoZG-GuUkCwuv41Y~ZZFmMhGueebZfHaNM4aQeY2-3mwqL9DFkjvv4885A__' },
    { id: 11, value: "Busca tornar os caminhos mais simples para obter resultados mais assertivos.", image: 'https://s3-alpha-sig.figma.com/img/4470/a364/9fa00e56148315ceeef4d9c2740e37ac?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5ugJ~NYs3WYMoT~J2QurGtoSnvJRfoGHgJICFiQsuo~yJjXVV55zewRkEHMX9Pqy9vi-l1Vd2gvEjSIrUVnoTiqUK2jh0zlyavo83P0Jdb3FyHLsTmpa1TAg~2i6agEnNi17WN9TYqHFrSblYu8HDqAbHf8tEmx3i-F-HGokidO721yT9masE6yN96EY9SmvCj0H1hFAE0YtJRTVHXHh~nq2AElpK20neLJgnUyWKA-bRc9NFP0Th4g0LellVXhEfeBNmc5Oy-mKBfgizHjRBXjJUHZimcwbP373Tw9-56R1TxS0ILhzVCJDWuzmdor5Ti1tMic--MVayeul2lBXw__' },
    { id: 12, value: "É brilhante na tratativa de relacionamento com os clientes, fornecedores e outros cocriadores.", image: 'https://s3-alpha-sig.figma.com/img/d96d/01e4/613a91f14654303cc94e1790ae364638?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZmWB8LPeaSj-7OhxldpocVUjdsa4fmPMLswJllcz~q3bcHLc6Dtq3bqIFM2yuLCrRLUpELJBNCKkJiZ1F6QLltcucMrgO5s9m5fF2KdcG-Avxk8PTGegeGLq~H6yCBDHVmIzM8rR0LyvKKa8eE4zJu696NVGcPDC1GI5NvZBghz6rV4LNbPuQ0b-cBwLG0fqsxNUp7PAmeaKYGMLyGqUCe8OgcNMWYZot3-MnTjpeunwaW7~pJmtUNQsjyGbDzhs73onvLxXkil--zqfhvciJ~w3ACS2Yo12bFyachDZpyfHZZbZGAqde8aoPSipBuUvkbMJSKOq~rpaAvV7TRrPCg__' },
    { id: 13, value: "Zela por um ambiente que abrace a diversidade e a pluralidade integralmente.", image: 'https://s3-alpha-sig.figma.com/img/57c4/286a/adf85d37a61208fce77d84a908cea04f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5qeMNhpNOYz7t-HXHjEQbt~K64lHENCH-GIoUwOSmCRlf~~Fm7QraqQdGOR3u4a8HMRW~XpjHDLp7A4PgfsvCdhzbvQ0ZI5ARMnsVHMmTmUZmABJTncjQFd0p28mC0DocEG82YyCsU6JWFrIg9eLK0RoM4zbk6W8Xq2KAW-Blmnjgedg4WbmFDycPn7xT4TFnWTr9GoBzfOyBPSbjs6aiWirPQq9001UJjlu-tydRuKHPLUmMFZo0x~4C-BITSlcWOr4Yv9iMj9iGl2eHvxdxDVY8G9vnWYyEvF-XjONV0XyKATtGjwJCyMBhFuM4f1X4DNcZqon6lwzVlqpRGw5Q__' },
    { id: 14, value: "Assume a responsabilidade de que sua jornada pessoal e comportamento ajudam a construir a ioasys que todos queremos ter.", image: 'https://s3-alpha-sig.figma.com/img/64d9/9bda/dfe7c06be8b30c8aa058ddca9c7dc77f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=acH6kqvniRdFXW5~qLrJnB8ycZslFwwMIxOnYpwsMvPBe4PpH7~pJTSXEVzgeUnx8MJVWsj06iI5Aeg2UAvjjUw07pU2HBdMEN-Cp8TYCrbCaD2ZZ1xmFSfwi3e8apM3Svz7z7hhCyOfV-0go6NRIwztseg7CVlMMAcgnnk3WxrPg2kC2xvfCPnbOfd-7SFsud9W4SrWI9h3ZFPB8G-l1OlozvPEmUccKytdldvl8kWqHaPihYKJdHfqG2rnBI8xQ-wcUs4tUkBQhrbMiLxESfmz6OhnSWUdWbtos-kmMaD7vS9Rf0hLb9b6u~znwhk06k8yiCSNQf3qQdnd5VwJqA__' },
    { id: 15, value: "Entende que inovação deve estar presente em tudo, desde um simples texto até os projetos mais complexos.", image: 'https://s3-alpha-sig.figma.com/img/bc72/ae2a/1027119ef9b9335a0bbc065480c0859d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6~6LQMuVyF5~oDun18OCS0ZoZ2GikcVJGkEd7Jmti4Mf3wnQS4yvIcPRe96UK13dj7OBOe1yXvw7b3UMs2V~C4vonnPmSIPa4qNzoE3dk4gMahmNxefM4WHr8a5a-FNtEVNmevZuhhii5z3GVCPAE-FDoao72ebwL0eDWMESeJsLUHvnp7aU4eCznIxIKxTCnQi4YeYmfJ1tXyOzYttQmlAugjeqqX-EKtf6v~x~bTzpNNomQlNxIJioCEu13WEC8ViRByia7l40SZbIrYMgIqpXnerQ6vQlmX72dqFc1VdzlOt0LbdF-sjlmpfkGovO7loKmrR0om1Qay0ZAUf0Q__' },
    { id: 16, value: "Entende que sustentabilidade não é só sobre ecologia, mas sim todos os aspectos que regem nossas vidas.", image: 'https://s3-alpha-sig.figma.com/img/cbfc/7994/cfada315b283d908d660feeeba4732c2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azNMwhOLbffCW7ViVyyNX3M0Xf6odvjD8h5TGS8NWZ2TY-HN2UHnbTNkU~pQSYuMfUJn5LZoGQ9xITVcHhUosezz55jxGmCRfYOo9TQ8-JrSYagGmC~1TyVts8B--v2cX1e1Esyxu7Z4kXxh335gF-SElFniVf2ROQUA7Ja4G5uY2X3Qr5KJ1toxC6OHl9xHXaZ32ozBg6mR37AqdOImVcIPfiqt1wo1Ou0zchsJ2zPcAbNR1btuGsCakNR1x2heRyRsDo37hjZr6WqUgc4jnSlq5nwvnMQK4XuNktxe9QRP5B~D11CytwjrSYU32SvHHGLZ6Wmo8~Bm9JI91dMmUA__' },
    { id: 17, value: "Performa de forma surpreendente e acima do esperado.", image: 'https://s3-alpha-sig.figma.com/img/1c6e/db1e/7a28c0d27aee7b51c549eac5d316a1a9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJyycPfcjD4h6gpg~FLMHH2WpaujLZBDjfa8KU8BPRjXV11Bq5SnjXdNVsg6OBOx4-q90CaEzmPKEHlNpF9w0CSJAVI76DAob8-0uBxM4ekQ2On2VU1YHKQcNbdeQcmMuVufK10NxDE~5i5WyaUdimodMnoWa9PpzwKUTzd4qA-TKcgQfcQDh0jI3H0w2ECOdNKcrPMnb1mmXvLcxGACcLQKr~fUw04yyGv9puzT0qWgIFpFLHO3bXQZy-4eQAZMAndokNPTAPL9BGzEXTEyFJVyAF6rcOxNOFLyMCn3m05ii7icy1lQjsFFo2L4KJxx~RCEx9h-qw19Qi9hTqNpAQ__' },
    { id: 18, value: "Possui conhecimento técnico notável e compartilha com as pessoas, tornando toda comunidade mais forte.", image: 'https://s3-alpha-sig.figma.com/img/c2c9/3ac3/171ce4ec15e7e251dfe3e9f303507e9a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKzrDjAD9mYsv-0Fhw7FkLPdnjXPOEPjzL-X5ymz7ovQTTL8elgoY4El3Q1uDlAuYxQcyQYRzcGrypgsPX9m4duk1j33V6~KNuT2-b8nqLin4O~X4WvayoRCzVMP2h--sRbXocONaB9kgAXY5BHPMc6EbnJYtvabW8Gh0DgMt-lQSAhLClcIErI4aaVgitVavi0LCPdR8yl0G3R7vpo~uiUYmGlnO4OYMeKdR4mWiKd0CLD033L9LOEXGZMGAmHHatKlfR724A00~hmlJvxbcdWp1P3XLkgCgZmG4q6izJ-JqYjeFg3y1l70mmc7Zn8XTSl45YC2BkJEwi4k3JBT0w__' },
    { id: 19, value: "Prioriza os ritos ágeis em todas as ações do dia a dia.", image: 'https://s3-alpha-sig.figma.com/img/bf05/f8ba/7c1bee29559d6d2a555395fb8acb4461?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=prmTXOovvNqqRG3j05djTR-6bkr3FkZ3EOG3FWENFVp3~PNVAz6trdf~X1xF18QYavozsE8THZBcWJaaX83AE7EXh2DlR6m-G0Lv01CKrmvirAUKxOttsiI481dtNsharSj~hfr9MPDs9MpBefoMB2JAiWuG3XY~oyZZAEcrtTVhooz-tD3UvgiZD6wHB4tbMIPr7pfYcHR-3TmB6R3FxnCW1i5pFvOWXpzJ1tlxRpES09U4K3v3zsIf4sVO-rDYHN--JLPs6ZZ8dDt1UUzS1rV~8DdVP26fCh45G1eaj0sU9kNoA8wWSYYeGe2HOOWIoqjppLPUxjt8JW7aAFBbfw__' },
    { id: 20, value: "Acredita 100% na liberdade para errar e aprender.", image: 'https://s3-alpha-sig.figma.com/img/f13a/8e5d/2df5fee120448247c9935db60f533555?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=np7tl3i67GPPVFiZXv0s7NN1FZItnBLK8qcCmLlttvPUoehzCB4fuC1V18oXzl0h0ShMkh2Zhunt3UtD90qFkwY~UBk45Bj11LrHRE~mjj906XJb7f~tjTJ47T8GAxZHaOVs5AEDeN1eNBuGvUSOc4kPrEG1IZG2pVg4TCqIndQR-lLeS1-W~-gDg2Ct1VSgsWgTdy8AvV6lOUKJveNed0bxmT9pgZz44c3M9rtu~ZIU5avBbPikhrVAAKyiCPSddkkd9TGtUTMHnwltKLgPGT6ob5UfXWcUTQAtJNCafGKUosVOwlDNKxKmIcn~IBhccvGI0zmbkTivG7am-t7~8w__' },
    { id: 21, value: "Acredita no poder do desenvolvimento pessoal e no aprendizado contínuo.", image: 'https://s3-alpha-sig.figma.com/img/bb45/0f21/e95dc51df201cc0947401cd09a2e16ab?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTT44RKDM3xbWfD6zp9R1AmIAjvBuI0nYo7zlXIBl5dm1xpVZsJ1aLzAiaxr-crPenCTvQnVB9plkzxKkdMXRAZOoEgmnSDeHLNepILGNQ466AJXDh28kQgxxnzEwsoX2Vu~BeGAvCxZJWlKkoU97~7XhU4ePVvR4bgvlXBSKZRTG2rT6E95WJHz41YPsv6Dqs0ql1h1l124EbvTj73-uyGH73WuIG24qTwItgoTca7MPZyTRiIVNt6Xl7sPw2sHLlNVH6oKz71IxED5q4yr2fzeMZCmwkuNMBBKaf5f5YpohI1dyV8n6cC3M7dmrFi5y4Su4MHvKCF7iBDNLHUNWQ__' },
    { id: 22, value: "Ajuda a construir um ambiente de trabalho cada dia mais agradável e produtivo.", image: 'https://s3-alpha-sig.figma.com/img/e8d5/214d/f1cff37ef1b6d0ccc196c00a39b66593?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2L2hMsLfLaL5FnAg~cLcJmejqr9yRSa~eSdbalISmP-skFEcBkEiQbxXDhVOifVb3Y5D878B4fkfTqJVMM3JqS-P7yb6-OnDXS6zDWoHTiDAK0EV4ZqXSdKOoThS4vF2eR1mQ4uul9kVQ-8bltgqol93M6jk2yLYMDnbkSwhkyV2UB8MPn2pOriFtKSiOFdEim5ZH-w4lStBEqQN74els5ym42RC~-nvWruD1MY6vshPVL5tZBvHx8IsTUmaiYi5vE3C3on866BFUgsT2Ah-diK60IHpV8HlhBSlhyNJyCmP1zLZ3E66zBSuJjh97VY3rOYGVyVVjWm1fPuH4ynwQ__' },
    { id: 23, value: "Sempre fomenta novas experiências para surpreender os clientes nas entregas.", image: 'https://s3-alpha-sig.figma.com/img/a8d0/dafe/0ba3013238d11f571a4c83b7e2874092?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoD9X7CwG9uCu3nLil6QzG2uI-GCKiL6C863r3wHjURMElUKRKgDVo4GJJ9TY-UFYtTwN2WX5zuiA3Glg4n3Bbayt6FNL7zZdRCEcxxL~DyM5JomC9xgjUl2638SZHtKmaemnGzrfIePG8i16k-EIz6JjB-gjRDXk6Dx3xYJrXOkv-uvWqrQIuySEGMX0UNjLN8KhJ5VXRrUrT3FWNoNHZ-JNpqe03CBbcoB36II3Zio14x0RLRSzWs0sDX0BEVTZ41guk6MgbTKm6KKuCGMmFvOy~WYrjl9wWlRAZlSZ1vBjDss0MxXuFPSBFVKfiYb38FQXwrw2Oe3WOnr6T-3Qw__' },
    { id: 24, value: "Trabalha de forma íntegra e transparente, sempre alinhando expectativas e restrições, seguindo planos concretos.", image: 'https://s3-alpha-sig.figma.com/img/fc7d/2f94/672de79434c07df6c80d044ee49f1f50?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AY2agw8Xp61q5hK-z-YBQyfraGBL0QBjkydbFXZ413MDXtO0PhWuqTE0OXyfSxsNzhTfANccYdXEsU7yRQx6NUWhXKlgPHCxCDw9m~7CRYeghty1LMDLXG1Lx2AO5itXyWbZDrpf2DJsr1cY~-Kn-8DPBYdMA1pFg~wUN9slnHtBwty~imDenjfjOZ7WKPWKuZlFFuVj-M~db4IPPZxxtV0KpPKqBcJeMRUdZy1SLtpKfeEKI06YGVXV0U9o38bbOL-DVPrltgkhYC2RsBjZd1oIwc28hLIPEGifoDrgAjeCQKETCIjVk0xGtMC-XZzEk6DC5SApQo8q5uEbzOGCuA__'}
]

export default valores;