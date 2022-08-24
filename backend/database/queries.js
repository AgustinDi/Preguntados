export default {
    clearDatabase : `
    USE [app_preguntas]
    
        DROP TABLE IF EXISTS [dbo].[Answer]
        DROP TABLE IF EXISTS [dbo].[Category]
        DROP TABLE IF EXISTS [dbo].[Question]
    
    SET ANSI_NULLS ON
    
    SET QUOTED_IDENTIFIER ON
    
    CREATE TABLE [dbo].[Answer](
        [id] [int] IDENTITY(1,1) NOT NULL,
        [answer1] [text] NOT NULL,
        [answer2] [text] NOT NULL,
        [answer3] [text] NOT NULL,
        [answer4] [text] NOT NULL,
     CONSTRAINT [PK_answer] PRIMARY KEY CLUSTERED 
    (
        [id] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
    
    /****** Object:  Table [dbo].[Category]    Script Date: 22/8/2022 12:25:45 ******/
    SET ANSI_NULLS ON
    
    SET QUOTED_IDENTIFIER ON
    
    CREATE TABLE [dbo].[Category](
        [id] [int] NOT NULL,
        [lvl] [int] NOT NULL,
        [reward] [int] NOT NULL,
     CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
    (
        [id] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    
    /****** Object:  Table [dbo].[Question]    Script Date: 22/8/2022 12:25:45 ******/
    SET ANSI_NULLS ON
    
    SET QUOTED_IDENTIFIER ON
    
    CREATE TABLE [dbo].[Question](
        [id] [int] IDENTITY(1,1) NOT NULL,
        [question] [text] NOT NULL,
        [correctAnswer] [int] NOT NULL,
        [FK_Category] [int] NULL,
     CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
    (
        [id] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
    
    SET IDENTITY_INSERT [dbo].[Answer] ON 
    
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (1, N'Baby bubble', N'Baby shower', N'Baby party', N'Baby pourage')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (2, N'Se acabó', N'Final', N'Fin', N'Conclusión')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (3, N'Metal', N'Plastico', N'Madera', N'Vidrio')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (4, N'Hamlet', N'Darren', N'Romeo', N'Macbeth')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (5, N'Irlanda', N'Gales', N'Estados Unidos', N'Escocia')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (6, N'Un Pretzel', N'Una manzana', N'Una menta', N'Una flor')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (7, N'Su santidad', N'Su señoria', N'Su eminencia', N'Mi amigo')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (8, N'Snapchat y github', N'Whatsapp y ShareIt', N'TikTok y Spotify', N'Lyft y Uber')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (9, N'Besa la cuenta', N'Rompe la cuenta', N'Espera "tener suerte"', N'Paga la cuenta')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (10, N'La lengua ', N'Los dientes', N'El pasaporte', N'La salida')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (11, N'La comida', N'El dinero', N'La ropa', N'La telerrealidad')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (12, N'Del colchón', N'De tus narices', N'De las azaleas', N'De tus boxers')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (13, N'Muñon', N'Joroba', N'Tocón', N'Restos')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (14, N'Por el oro', N'Por dios', N'Por mi amor', N'Por el medio ambiente')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (15, N'En un banco', N'En un supermercado', N'En un jardin infantil', N'En una montaña rusa')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (16, N'10 Ruedas', N'10 Rayos', N'10 Piñones', N'10 Vidas')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (17, N'Despertar', N'Dormir', N'Comer', N'Llorar')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (18, N'Se arremanga', N'Baja las cortinas', N'Dobla las toallas', N'Se toca la oreja')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (19, N'Ratatata', N'"Cuii"', N'"Toc Toc"', N'"Ding Dong"')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (20, N'Mandrágora', N'Mandalay', N'Mandolina', N'Mandril')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (21, N'Bajo riesgo', N'Bajo amenaza', N'En peligro de extincion', N'Peligradas')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (22, N'Buff Fit Fella', N'Bye for Five', N'Boy Friend Furius', N'Best Friends for Ever')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (23, N'Patinaje de velocidad', N'Doma de caballos', N'Gimnasia deportiva', N'Remo')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (24, N'Perú', N'Kenia', N'Australia', N'Irlanda')
    INSERT [dbo].[Answer] ([id], [answer1], [answer2], [answer3], [answer4]) VALUES (25, N'Squash', N'Voleibol', N'Críquet', N'Béisbol')
    SET IDENTITY_INSERT [dbo].[Answer] OFF
    
    INSERT [dbo].[Category] ([id], [lvl], [reward]) VALUES (1, 1, 50000)
    INSERT [dbo].[Category] ([id], [lvl], [reward]) VALUES (2, 2, 80000)
    INSERT [dbo].[Category] ([id], [lvl], [reward]) VALUES (3, 3, 120000)
    INSERT [dbo].[Category] ([id], [lvl], [reward]) VALUES (4, 4, 250000)
    INSERT [dbo].[Category] ([id], [lvl], [reward]) VALUES (5, 5, 500000)
    
    SET IDENTITY_INSERT [dbo].[Question] ON 
    
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (1, N'¿Qué nombre tiene tradicionalmente la fiesta que se hace a una mujer que espera un bebé?', 2, 2)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (2, N'¿Qué palabra aparece tradicionalmente en la pantalla al terminar un largometraje?', 3, 1)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (3, N'¿Cuál de los siguientes sería atraído por un imán?
    ', 1, 1)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (4, N'¿Cuál de estos nombres no aparece en el título de una obra de Shakespeare?', 2, 5)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (5, N'¿Cuál es el lugar de origen del whisky escocés?', 4, 1)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (6, N'En los hoteles elegantes, ¿qué snack suele dejarse sobre las almohadas?', 3, 2)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (7, N'¿Cuál es la forma tradicional apropiada para dirigirse a un juez en Estados Unidos?', 2, 2)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (8, N'¿Cuáles de estas aplicaciones ofrecen más o menos el mismo tipo de servicio?', 4, 4)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (9, N'En un restaurante, si alguien "invita", ¿qué hace?', 4, 1)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (10, N'Si alguien pide ver tu identificación, ¿qué puedes mostrarle?', 3, 1)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (11, N'Según el viejo dicho en inglés, ¿el amor por ___ cosa es la raíz de todos los males?', 2, 4)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (12, N'Cuando algo se encuentra en un lugar muy obvio, se dice que está "abajo..."', 2, 3)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (13, N'¿Cómo se llama la parte que queda en el suelo después de talar un árbol?', 3, 4)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (14, N'Para convencerte de que dice la verdad, una persona puede decir que lo juraría...
    ', 2, 3)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (15, N'¿En dónde es más probable que escuches la orden "Limpieza en el pasillo 5"?', 2, 2)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (16, N'Por definición, ¿qué tiene una bicicleta de 10 velocidades?', 3, 4)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (17, N'Una canción de cuna se canta para ayudar a los bebés a...', 2, 2)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (18, N'¿Qué hace una persona que se está preparando para trabajar duro?', 1, 3)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (19, N'¿qué viene antes de que alguien conteste: "¿Quién es?"?', 3, 3)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (20, N'¿Cuál de estos es un instrumento musical?', 3, 4)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (21, N'¿Qué frase se usa para describir a especies animales que podrían desaparecer?', 3, 3)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (22, N'¿Qué significa la abreviación en inglés "BFF"?', 4, 5)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (23, N'¿Cuál de estos deportes tiene una variedad llamada "en rápidos"?', 4, 5)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (24, N'¿De qué país son nativos los canguros?', 3, 5)
    INSERT [dbo].[Question] ([id], [question], [correctAnswer], [FK_Category]) VALUES (25, N'¿De qué deporte proviene la frase "bola curva"?', 4, 5)
    SET IDENTITY_INSERT [dbo].[Question] OFF
    
    ALTER TABLE [dbo].[Answer]  WITH NOCHECK ADD  CONSTRAINT [FK_Answer_Question] FOREIGN KEY([id])
    REFERENCES [dbo].[Question] ([id])
    NOT FOR REPLICATION 
    
    ALTER TABLE [dbo].[Answer] NOCHECK CONSTRAINT [FK_Answer_Question]
    `,
    selectAllCategories: 'SELECT * FROM category',
    selectAllQuestions: 'SELECT * FROM question FULL OUTER JOIN answer ON answer.id = question.id',
    selectAQuestion: (id) => `SELECT * FROM question FULL OUTER JOIN answer ON answer.id = question.id FULL JOIN Category ON Question.FK_Category = Category.id WHERE question.id = ${id}`,
    selectACategory: (id) => `SELECT * FROM question FULL OUTER JOIN answer ON answer.id = question.id FULL JOIN Category ON Question.FK_Category = Category.id WHERE Category.id = ${id}`
}