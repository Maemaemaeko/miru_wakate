const sourceText = "公開資料\r\n\r\n\r\n・はじめに\r\n* イントロダクションに絞って考えた理由\r\n評価の高い論文においてIntroductionは応用言語学の観点から研究領域や研究上のギャップ、自身の研究の位置づけを示す重要な項目であるとされている．[1]\r\nまた、ソフトウェア工学分野において、論文のIntroductionは本文の中核を担い、研究の価値の判断基準として用いられる．[2]\r\nそこで我々はIntroductionに注目して評価した。\r\nまた，Introductionのわかりやすさを計るCARS（Create-A-Research-Space)モデルより、理想的なIntroductionは「重要な研究目標、既存タスクの限界、測れていない能力、提案タスク、検証方針」の５つの要素で構成される．\r\n\r\n\r\n* なぜ下記の５つの定義を選択したのか\r\n新タスク論文のIntroduction では、「何が未解決なのか、 既存タスクの限界、何を測るのか、意義は何か、評価設計 は適切か」が示されていることが理想的である。 そこで我々は、新タスク論文が以下の５つの要素で構成 されているものとし、それぞれについて「わかりやすいと は何か」について考察した。 \r\nまた、環境や文化に関連する定義を社会的定義、学術や技術に関連する定義を学術的定義とした．\r\n\r\n\r\n以下は５つの定義の詳細とその根拠である．\r\n\r\n\r\n1. 新タスクの必要性（社会的）\r\n図りたい能力・現象・応用要求は明確か？\r\n既存タスクでは扱うことのできない新しい研究課題を提示しているか？\r\n【根拠】\r\nVQA: Visual Question Answering [3]\r\nVQA は「画像＋自然言語質問」から「自然言語回答」を返す新タスクを提案し、画像キャプション生成より詳細な画像理解と複雑な推論が必要だと説明している。これは、新タスクが必要な理由を「既存タスクより高度・別種の能力を測るため」として示している例。\r\n\r\n\r\nGLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding [4]\r\nGLUE は、単一タスク・単一データセットに特化した NLU モデルではなく、より一般的・柔軟・頑健な言語理解を評価する必要性を述べている。これは「新しい評価枠組みがなぜ必要か」を示す根拠。\r\n\r\n\r\n2. 既存タスク・既存手法の不足（学術的）\r\n既存タスクとの差分が入力・出力・制約・成功条件・測定能力の違いとして説明されているか？\r\n既存評価が過大評価・過小評価・測定不能にしている点を特定しているか？ \r\n【根拠】\r\nBeyond Accuracy: Behavioral Testing of NLP Models with CheckList [5]\r\nCheckList は、通常の held-out accuracy が NLP モデルの汎化性能を過大評価しうると指摘し、能力別・テストタイプ別の行動テストを提案している。したがって、「既存評価では何が測れていないか」を明示する必要がある、という基準の強い根拠になりうる。\r\n\r\n\r\nKnow What You Don’t Know: Unanswerable Questions for SQuAD [6]\r\nSQuAD 2.0 は、既存の抽出型読解システムが、答えが文脈中に存在しない質問にも不確かな推測をしがちであり、既存データセットは答えられる質問に偏っていたと説明している。これは、「既存タスクの不足を特定し、その不足を埋める形で新タスクを定義する」例。\r\n\r\n\r\n3. 客観的了解性（学術的）\r\n入力・出力・制約条件・正解形式・成功条件が明確か？\r\n第三者が同じタスクを再実装・再評価できる定義になっているか？\r\n【根拠】\r\nVQA: Visual Question Answering [3]\r\nVQA は、入力を「画像と自然言語質問」、出力を「正確な自然言語回答」と明示している。このように入力・出力が明確であることは、新タスクを既存タスクから区別し、第三者が再実装・評価できる条件になりうる。\r\n\r\n\r\nSQuAD: 100,000+ Questions for Machine Comprehension of Text [7]\r\nSQuAD は、Wikipedia 記事に対してクラウドワーカーが作成した質問を与え、答えは対応する読解パッセージ中のテキスト span として定義される、と説明している。これは、入力、出力、正解形式を操作可能に定義している例。\r\n\r\n\r\n4. 学術的意義・社会的意義（社会的，学術的）\r\n学術的にはどの能力評価・未解決問題・分野の進歩に貢献するか？\r\n社会的にはどの利用者・応用場面・リスク・倫理的，実用的要請と関係するか？\r\n【根拠】\r\nVQA: Visual Question Answering [3]\r\nVQA は、視覚障害者支援のような実世界シナリオに言及しつつ、画像理解と推論を要する研究課題として提案されている。したがって、社会的意義と学術的意義を同時に説明する例になる。\r\n\r\n\r\nImageNet Large Scale Visual Recognition Challenge [8]\r\nImageNet ILSVRC 論文は、大規模物体認識ベンチマークが物体認識の進歩を可能にし、分野の現状分析や人間性能との比較を行ったと説明している。これは、タスク・ベンチマークが研究分野全体の進歩を測る学術的基盤になりうることを示している。\r\n\r\n\r\nData Statements for Natural Language Processing: Toward Mitigating System Bias and Enabling Better Science [9]\r\nData Statements は、データの由来や対象集団を明示することで、バイアス、一般化可能性、倫理的問題を扱えるようになると論じている。これは、社会的意義や適用範囲を過大主張せず、データ・利用者・影響を明確にする必要性の根拠になる。\r\n\r\n\r\n5. 評価設計の明確さ（学術的）\r\n評価データ・アノテーション・分割・評価指標・評価手順が明確か？\r\nベースライン・人間性能・既存手法との比較により，タスクの難しさと研究余地が示されているか？\r\nデータ・指標・対象範囲・想定利用の限界が説明されているか？\r\n\r\n\r\n【根拠】\r\nThe PASCAL Visual Object Classes Challenge: A Retrospective [10]\r\nPASCAL VOC は、公開データセット、ground truth annotation、標準化された評価ソフトウェア、年次競技会・ワークショップから成る評価基盤として説明されている。これは、評価データ・正解・評価手順を標準化する必要性の根拠になる。\r\n\r\n\r\nImageNet Large Scale Visual Recognition Challenge [8]\r\nImageNet ILSVRC は、公開訓練データ、秘匿テストアノテーション、評価サーバ、年次コンペティション、分野の進歩分析、人間性能との比較を含む枠組みとして説明されている。これは、評価設定、比較可能性、人間性能、限界や将来方向まで含めるべきことの根拠になる。\r\n\r\n\r\nSQuAD: 100,000+ Questions for Machine Comprehension of Text [7] \r\nSQuAD は、強いロジスティック回帰モデル、単純ベースライン、人間性能を比較し、データセットが将来研究にとって十分難しい challenge problem であることを示している。これは、新タスク提案においてベースラインと人間性能が有用な根拠になる。\r\n\r\n\r\nModel Cards for Model Reporting [11]\r\nModel Cards は、モデルの想定利用文脈、性能評価手続き、関連情報を開示することを求めている。これは、評価結果だけでなく、想定利用、評価条件、性能の解釈可能性を明示する必要性の根拠になる。\r\n        \r\n\r\n\r\n・なぜ新しいタスクが必要か\r\n新しいタスクの必要性を示すためには、主に次の2要素が必要であると考える。\r\n* 現実世界にどのような未解決のニーズがあるのか\r\n* 従来の問題設定では、なぜそのニーズを満たせないのか？\r\nAgriculture-Vision: A Large Aerial Image Database for Agricultural Pattern Analysis [12]: 農作業の効率化や収穫量の向上のため、広範囲の農地を高解像度画像をセグメンテーションする必要がある。しかし、従来のセマンティックセグメンテーションでは、計算量やメモリの制約により、巨大な高解像度画像を高精度に処理しにくい。\r\nLearning to detect unseen object classes by between-class attribute transfer [13]: 人間のように30000種類の物体クラスを識別させたいが、従来手法では、適切にラベル付けされた数百万枚の学習画像が必要となるため、今後数年では不可能である。\r\nこのように、「新しいタスクが必要である」と主張するためには、従来の問題設定が置いている前提や制約のために、本質的に扱えない対象が存在することを示す必要がある。\r\nわかりやすいポイント\r\n上記の要素に追加で、提案タスクの着想につながった観察や思考過程が記されていると、新規タスクが自然に導かれる問いであることが読者にわかり、”わかりやすさ”につながると考える。\r\nStructure from Collision [14]: 衝突時の変形は物体の内部構造に影響される、という観察から、変形を手掛かりに内部構造を推定するタスクを導く。\r\nLearning to detect unseen object classes by between-class attribute transfer [13]: 人間は画像例がなくても言語による説明から未知の物体を認識できる、という観察から、言語情報を用いて未学習クラスを検出するタスクを導く。\r\nPanoptic Segmentation [15]: stuffとthingsが別々のタスクとして扱われてきた、という研究上の分断への疑問から、両者を統合してシーン全体を一貫して理解するタスクを導く。\r\nつまり、新タスク提案論文では、現実のニーズと既存の問題設定との間にあるギャップを示し、そのギャップを埋めるための自然な問いとして新規タスクを位置付けることが重要だとわかる。\r\n・既存タスク・既存手法では何が足りないか\r\n 新規タスクを提案する論文では、現実で実現したいことがあるが現在の研究タスクの定義では解けない、あるいは既存の評価指標では新しい問題設定を評価できない、という不足が Introduction に明確に書かれていた。しかし、現実でできない・評価指標が足りないと述べていれば必ず新規タスク論文である、というわけではなかった。一見すると新規タスクに見えても、実際には既存タスクを対象とし、より実世界での応用に向けた新規手法の観点から書かれた論文もあった。\r\n \r\n読んだ論文六本のうち、FICTION [16] 、Panoptic Segmentation [15] 、VQA² [17] の三本は、既存タスクが置いている前提を特定し、その前提が取りこぼす対象を新しいタスクとして定義していた。FICTION [16] は、行動予測が二次元フレーム上に閉じている点を「limited to the 2D space of video frames」「ignoring the \"where\" and \"how\"」と述べ、三次元位置と身体姿勢が予測対象から抜け落ちていることを指摘している。VQA² [17] は、品質評価がスコア出力に閉じている点を挙げ、劣化内容を理解・説明する能力がタスクに含まれていないことを指摘している。いずれも不足が、「既存手法の性能が低い」ではなく「既存の問題設定では扱えない対象タスクがある」という形で書かれている。\r\n \r\n 特に Panoptic Segmentation [15] は、評価の不足まで踏み込んでいる点で参考になる。同論文は「these metrics are best suited either for stuff or things, respectively, but not both」と既存指標の限界を指摘したうえで、「the use of disjoint metrics is one of the primary reasons the community generally studies stuff and things segmentation in isolation」と述べ、指標の分断がタスクの分断を再生産しているという因果を示している。FICTION では、指標は既存のものを流用し、データセットと評価プロトコルのみを新設する例もあり、新タスク提案が必ずしも新しい指標を伴うとは限らない。\r\n \r\n 一方、NAS3R [18] 、D4RT [19] 、LA-Pose [20] の三本は、扱うタスク自体が既存のFeedFowardのシーン復元とカメラ姿勢推定である。不足として指摘されるのは設定・構造・学習の方法である。NAS3R [18] は、既存手法が事前学習済みモデルや正解内部パラメータに依存する点を「still require ground-truth camera intrinsics」と述べ、D4RT [19] は処理を「dividing it into discrete, task-specific components」と分割している点を、LA-Pose [20] は「surprisingly little effort has been devoted to exploring self-supervised pretraining」として学習手法の空白を、それぞれ問題としている。いずれもタスク定義や評価の側ではなく、そのタスクをどう解くかの側の不足である。\r\n\r\n\r\n・提案タスクでは、何を入力し、どの制約下で、何を出力するのか（操作的なタスク定義）\r\n 「操作的なタスク定義」とは、研究者が扱いたい抽象的な能力や現象を、第三者が実際に実行し、結果を判定できる手続きへ置き換えることである。例えば「画像を理解する能力」は、それ自体を直接見ることができない。そこで、どの画像と質問を与え、何を回答させ、どの情報を利用してよいかを定め、回答をどの基準で採点するかまで具体化する。Jacobs and Wallachは、抽象的な構成概念について「直接測定できず、関連する観察可能な性質から推論しなければならない」と説明している。つまり、正答率などの数値は能力そのものではなく、ある課題を代理として能力を測った結果である。このため、課題設計に含まれる仮定を明示しなければ、得点を「理解力そのもの」と誤って解釈する危険がある。[21]\r\n\r\n\r\n 新タスク提案系研究の操作的定義には、少なくとも、①測定対象となる能力・現象、②一つの問題事例の単位、③入力、④利用可能な情報・時間・環境などの制約、⑤要求する出力または行動、⑥成功規準、⑦対象範囲と除外範囲が必要である。Subramonianらは、ベンチマークが、特定の形式、正しい入出力対からなるデータセット、評価指標によってタスクを具体化すると整理している。同時に、8種類の自然言語処理タスクを対象とした文献分析と実務家調査から、同じタスク名でも、何の能力を測るかについて研究者間の理解が一致しない場合があると報告した。したがって、入出力を示すだけでなく、「なぜこの作業が目的とする能力を表すのか」を説明する必要がある。[22]\r\n\r\n\r\n では、その操作的定義が「わかりやすく説明されている」とは何か。MIRU2026若手プログラムは、新タスク提案系研究で「タスク定義の明確さ」を重視し、論文の分かりやすさに関係する要素として、問題設定、論理展開、図表、実験結果の示し方を挙げている。\r\n これを査読研究と合わせると、読者が論文の早い段階で、「何を測るのか」「モデルに何をさせるのか」「なぜそれで測れるのか」「何を成功とするのか」「結果からどこまで主張できるのか」に一義的に答えられる状態と整理できる。BetterBenchも、ベンチマーク設計では、測定する能力・概念を定義するだけでなく、それが具体的なタスクへどう変換されるかを説明すべきだとしている。[23]\r\n\r\n\r\n したがって、本稿における「わかりやすさ」は、文章が平易であることだけを意味しない。本文中の定義、入出力例を示す図、データ構成、評価指標、ベースライン、結論が同じタスク像を一貫して示していることが重要である。また、正例だけでなく、曖昧な事例、対象外の事例、利用してはいけない情報も示されていれば、タスクの境界を理解しやすい。読者が暗黙の情報を推測して補わなくても、同じ評価手続きを再現し、得点の意味と主張の限界を説明できるなら、その操作的タスク定義は「わかりやすく説明されている」と判定できる。なお、この判定基準は単一論文が提示した既成の標準定義ではなく、以下の査読研究をMIRUの目的に沿って統合した操作的整理である。\r\n\r\n\r\n\r\n\r\n・そのタスクにどんな学術的・社会的な意義があるか\r\n前述した新タスク導入の必要性に加えて、提案したタスクが研究分野と社会にどのような価値をもたらすかを示すことも重要である。\r\n学術的意義では、提案手法の性能だけでなく、そのタスクによって今後どのような研究が可能になるかを示す必要がある。例えば、新しい研究課題を生み出すこと、異なる研究分野を結びつけること、新しいモデル・データセット・評価方法の開発を促すことなどが挙げられる。\r\n社会的意義では、単に応用分野を列挙するのではなく、誰が、どのような場面で利用し、何が改善されるのかを具体的に示すと分かりやすい。また、必要に応じて、安全性、信頼性、公平性、説明可能性との関係にも触れるとよい。\r\n\r\n\r\n* VQA² [17]では、映像品質評価を数値予測から劣化内容の理解・説明へ拡張している。これにより、映像品質評価とマルチモーダル理解を結びつけるとともに、配信映像やAI生成映像の品質改善への活用を示している。\r\n* Agriculture-Vision [12]では、コンピュータビジョンと農学を結びつけ、農地画像解析の研究基盤を提供している。また、農地の異常を早期に検出し、損失防止や収穫量向上につなげる社会的価値も示している。\r\n* Interactive Medical Image Segmentation [24]では、多様な医療画像と操作方法を統合的に学習・評価する基盤を提供している。さらに、医師が分割結果を修正できることで、診断・治療時の位置特定と結果の信頼性を高められる。\r\n* FIction [16]では、将来行動予測を、二次元上の行動分類から、三次元位置と身体姿勢を含む予測へ拡張している。これは行動予測と三次元シーン理解を結びつける研究方向を生み出し、支援ロボットなどへの応用につながる。\r\n* Structure from Collision [14]では、衝突時の変形から画像には見えない内部構造を推定する新しい三次元復元問題を提示している。これにより、三次元復元と物理理解を結びつけ、内部検査やロボットの物体理解への発展が考えられる。\r\n特に分かりやすい論文では、学術的意義と社会的意義を別々に列挙するのではなく、次の流れで一続きに説明している。\r\n新たに可能になること→ 研究分野への広がり→ 利用者と利用場面→ 改善される問題\r\nこのように、研究上新しく可能になることが、社会でどのような価値を持つのかを対応させて示すことで、新規タスクの意義が伝わりやすくなる。 \r\n\r\n\r\n・評価設計、ベースライン、限界が明確か\r\n新規タスクを提案する論文のイントロダクションにおいて、タスク自体の説明に注力するあまり、後続の評価設計に関する記載が不足することが多々ある。しかし、新タスクのState-of-the-Artを目指す今後の研究に向けて明確な指針を示すためには、評価設定、ベースライン、そして現段階での限界をわかりやすく共有することが極めて重要である。本稿では、イントロダクションにおいて評価設計をどのように記述し、後続の研究へとつなげるべきかについてまとめる。\r\n\r\n\r\n後続の評価設計につなげるとは、新タスクとして定義したタスクの達成度を適切に評価するための指標を提示し、それが新タスクに対してなぜ妥当であるのかを説明することである。既存の評価指標を適用するにせよ、新たな評価指標を設定するにせよ、その理由を明記する必要がある。 そもそも評価設計が書かれていなければ、読者には何も伝わらない。新タスクの達成度を測る際の妥当性を示し、達成度を具体的に伝えるためには、「評価指標が陽に書かれていること」と「評価設計を決定した理由が書かれていること」が分かりやすさの絶対条件となる。\r\n\r\n\r\n評価設計が基本的に分かりやすいと評価される論文には、指標の見せ方や設定に優れた工夫が見られる。具体的な成功例として以下の論文が挙げられる。\r\n* Panoptic Segmentation [15]：\r\n評価のために新たに必要となる指標「Panoptic Quality」を提示することで指標を明確化し、研究の方向性を決定づけている。また、ベンチマークに用いるデータセットまで明確化されており、どこに向けた研究であるかが非常に分かりやすい。\r\n\r\n\r\n* PolarFree：Polarization-based Reflection-Free Imaging [25]：\r\n評価指標を明確にしていることに加え、具体的にどのような場面での利用を想定しているのかを明らかにしたうえで、実際に利用を考える場面での検証まで行っている。\r\n\r\n\r\n* Structure from Collision [14]\r\n評価が具体化されており、数値が上がるほうがいいのか、下がるほうがいいのかといった「指標の読み方」まで明確にしている。\r\n\r\n\r\n* FICTION ：4D Future Interaction Prediction from Video [16]\r\nどのようなタスクを想定しているのかが明記されており、ベースライン手法との性能差を具体的に書いている。\r\n \r\nわかりやすい評価設計・ベースライン・限界を記述するために求められるのは、単なる指標の羅列ではなく「評価設計の妥当性についての説明」である。妥当性を説明することで、新タスクの達成度を評価する上での指標の適切さを読者に伝えることができる。評価指標とベースラインを共有することは、新タスクのSoTAに挑む未来の研究者たちに対して、強力かつ明確な研究の指針を示すことにつなげることができる。\r\n\r\n\r\n\r\n\r\n【参考文献】\r\n[1] J. M.-H. Lim，“How do writers establish research niches? A genre-based investigation into management researchers' rhetorical steps and linguistic mechanisms”，Journal of English for Academic Purposes，September 2012．\r\n[2] L. Anthony，“Writing research article introductions in software engineering: how accurate is a standard model?”，IEEE Transactions on Professional Communication，April 1999．\r\n[3] S. Antol, A. Agrawal, J. Lu, M. Mitchell, D. Batra, C. L. Zitnick, and D. Parikh，“VQA: Visual Question Answering”，Proceedings of the IEEE International Conference on Computer Vision，December 2015．\r\n[4] A. Wang, A. Singh, J. Michael, F. Hill, O. Levy, and S. R. Bowman，“GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding”，Proceedings of the 2018 Workshop on Analyzing and Interpreting Neural Networks for Natural Language Processing，November 2018．\r\n[5] M. T. Ribeiro, T. Wu, C. Guestrin, and S. Singh，“Beyond Accuracy: Behavioral Testing of NLP Models with CheckList”，Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics，July 2020．\r\n[6] P. Rajpurkar, R. Jia, and P. Liang，“Know What You Don’t Know: Unanswerable Questions for SQuAD”，Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics，July 2018．\r\n[7] P. Rajpurkar, J. Zhang, K. Lopyrev, and P. Liang，“SQuAD: 100,000+ Questions for Machine Comprehension of Text”，Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing，November 2016．\r\n[8] O. Russakovsky, J. Deng, H. Su, J. Krause, S. Satheesh, S. Ma, Z. Huang, A. Karpathy, A. Khosla, M. Bernstein, A. C. Berg, and L. Fei-Fei，“IImageNet Large Scale Visual Recognition Challenge”，International Journal of Computer Vision，April 2015．\r\n[9] E. M. Bender and B. Friedman，“Data Statements for Natural Language Processing: Toward Mitigating System Bias and Enabling Better Science”，Transactions of the Association for Computational Linguistics，December 2018．\r\n[10] M. Everingham, S. M. A. Eslami, L. Van Gool, C. K. I. Williams, J. Winn, and A. Zisserman，“The PASCAL Visual Object Classes Challenge: A Retrospective”，International Journal of Computer Vision，January 2015．\r\n[11] M. Mitchell, S. Wu, A. Zaldivar, P. Barnes, L. Vasserman, B. Hutchinson, E. Spitzer, I. D. Raji, and T. Gebru，“Model Cards for Model Reporting”，Proceedings of the Conference on Fairness, Accountability, and Transparency，January 2019．\r\n[12] M. T. Chiu, X. Xu, Y. Wei, Z. Huang, A. Schwing, R. Brunner, H. Khachatrian, H. Karapetyan, I. Dozier, G. Rose, D. Wilson, A. Tudor, N. Hovakimyan, T. S. Huang, and H. Shi，“Agriculture-Vision: A Large Aerial Image Database for Agricultural Pattern Analysis”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2020．\r\n[13] C. H. Lampert, H. Nickisch, and S. Harmeling，“Learning to detect unseen object classes by between-class attribute transfer”，Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition，June 2009．\r\n[14] T. Kaneko，“Structure from Collision”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2025．\r\n[15] A. Kirillov, K. He, R. Girshick, C. Rother, and P. Dollár，“Panoptic Segmentation”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2019．\r\n[16] K. Ashutosh, G. Pavlakos, and K. Grauman，“FIction: 4D Future Interaction Prediction from Video”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2025．\r\n[17] Z. Jia, Z. Zhang, J. Qian, H. Wu, W. Sun, C. Li, X. Liu, W. Lin, G. Zhai, and X. Min，“VQA²: Visual Question Answering for Video Quality Assessment”，Proceedings of the 33rd ACM International Conference on Multimedia，October 2025． \r\n[18] R. Huang, W. Luo, Y. Mao, and K. Mikolajczyk，“From None to All: Self-Supervised 3D Reconstruction via Novel View Synthesis”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2026．\r\n[19] C. Zhang, G. Le Moing, S. Koppula, I. Rocco, L. Momeni, J. Xie, S. Sun, R. Sukthankar, J. K. Barral, R. Hadsell, Z. Ghahramani, A. Zisserman, J. Zhang, and M. S. M. Sajjadi，“Efficiently Reconstructing Dynamic Scenes One D4RT at a Time”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2026．\r\n[20] Z. Wang, S. Nair, P. Chidananda, P. Kachana, S. Li, M. Brown, and Y. Furukawa，“LA-Pose: Latent Action Pretraining Meets Pose Estimation”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2026．\r\n[21] A. Z. Jacobs and H. Wallach，“Measurement and Fairness”，Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency，March 2021．\r\n[22] A. Subramonian, X. Yuan, H. Daumé III, and S. L. Blodgett，“It Takes Two to Tango: Navigating Conceptualizations of NLP Tasks and Measurements of Performance”，Findings of the Association for Computational Linguistics: 2023 Annual Meeting，July 2023．\r\n[23] A. Reuel, A. Hardy, C. Smith, M. Lamparth, M. Hardy, and M. Kochenderfer，“BetterBench: Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices”，Advances in Neural Information Processing Systems 37，November 2024．\r\n[24] J. Cheng, B. Fu, J. Ye, G. Wang, T. Li, H. Wang, R. Li, H. Yao, J. Chen, J. Li, Y. Su, M. Zhu, and J. He，“Interactive Medical Image Segmentation: A Benchmark Dataset and Baseline”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2025．\r\n[25] M. Yao, M. Wang, K.-M. Tam, L. Li, T. Xue, and J. Gu，“PolarFree: Polarization-based Reflection-Free Imaging”，Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition，June 2025．\r\n\r\n\r\n\r\n\r\n\r\n\r\n ・100文字以内のまとめ\r\n\r\n\r\n 我々は新タスク論文について、５つの定義に基づき、Introduction に注目してわかりやすさを評価した。結果、Introduction は、研究の問い、必要性、既存研究との差、目的、貢献を一つの論理として成立させる中核的な部分であり、Introduction の質向上が論文の了解性につながると確認した。";
const sourceContainer = document.getElementById("source-text");
const majorHeadings = new Map([
  ["・はじめに", "はじめに"],
  ["・なぜ新しいタスクが必要か", "なぜ新しいタスクが必要か"],
  ["・既存タスク・既存手法では何が足りないか", "既存タスク・既存手法では何が足りないか"],
  ["・提案タスクでは、何を入力し、どの制約下で、何を出力するのか（操作的なタスク定義）", "提案タスクでは、何を入力し、どの制約下で、何を出力するのか（操作的なタスク定義）"],
  ["・そのタスクにどんな学術的・社会的な意義があるか", "そのタスクにどんな学術的・社会的な意義があるか"],
  ["・評価設計、ベースライン、限界が明確か", "評価設計、ベースライン、限界が明確か"],
  ["・100文字以内のまとめ", "まとめ"],
]);
const boldPhrases = [
  "従来の問題設定が置いている前提や制約のために、本質的に扱えない対象が存在すること",
  "提案タスクの着想につながった観察や思考過程",
  "新規タスクが自然に導かれる問いである",
  "現実のニーズと既存の問題設定との間にあるギャップを示し、そのギャップを埋めるための自然な問いとして新規タスクを位置付けることが重要だとわかる。",
];
const impactExamples = [
  { prefix: "* VQA² [17]では、", title: "・VQA² [17]" },
  { prefix: "* Agriculture-Vision [12]では、", title: "・Agriculture-Vision [12]" },
  { prefix: "* Interactive Medical Image Segmentation [24]では、", title: "・Interactive Medical Image Segmentation [24]" },
  { prefix: "* FIction [16]では、", title: "・FIction [16]" },
  { prefix: "* Structure from Collision [14]では、", title: "・Structure from Collision [14]" },
];
const needExamples = [
  "Agriculture-Vision: A Large Aerial Image Database for Agricultural Pattern Analysis [12]:",
  "Learning to detect unseen object classes by between-class attribute transfer [13]:",
  "Structure from Collision [14]:",
  "Panoptic Segmentation [15]:",
];

function normalizeLeadingSpaces(text) {
  return text.replace(/^ +/, (spaces) => "　".repeat(spaces.length));
}

function appendFormattedText(element, text) {
  let cursor = 0;
  while (cursor < text.length) {
    const remaining = text.slice(cursor);
    const citation = remaining.match(/\[(\d+)\]/);
    const boldCandidates = boldPhrases
      .map((phrase) => ({ phrase, index: remaining.indexOf(phrase) }))
      .filter(({ index }) => index >= 0);
    const bold = boldCandidates.sort((a, b) => a.index - b.index)[0];
    const citationIndex = citation?.index ?? Infinity;
    const boldIndex = bold?.index ?? Infinity;

    if (citationIndex === Infinity && boldIndex === Infinity) {
      element.append(document.createTextNode(remaining));
      break;
    }

    const nextIndex = Math.min(citationIndex, boldIndex);
    element.append(document.createTextNode(remaining.slice(0, nextIndex)));

    if (boldIndex <= citationIndex) {
      const strong = document.createElement("strong");
      strong.textContent = bold.phrase;
      element.append(strong);
      cursor += boldIndex + bold.phrase.length;
    } else {
      const citationLink = document.createElement("a");
      citationLink.className = "citation-link";
      citationLink.href = `#ref-${citation[1]}`;
      citationLink.textContent = citation[0];
      citationLink.setAttribute("aria-label", `参考文献${citation[1]}へ移動`);
      element.append(citationLink);
      cursor += citationIndex + citation[0].length;
    }
  }
}

function appendStarEmphasis(element, text) {
  element.append(document.createTextNode("・"));
  const emphasizedText = document.createElement("span");
  emphasizedText.className = "star-emphasis-text";
  const titleText = text.replace(/^・/, "");
  const normalizedTitle = /\[\d+\]$/.test(titleText.trim())
    ? `${titleText}：`
    : titleText;
  appendFormattedText(emphasizedText, normalizedTitle);
  element.append(emphasizedText);
}

let inEvidenceBlock = false;
let inDefinitionBlock = false;
const sourceLines = sourceText
  .split(/\r?\n/)
  .filter((line) => line.trim() && line.trim() !== "公開資料")
  .filter((line) => ![
    "* 現実世界にどのような未解決のニーズがあるのか",
    "* 従来の問題設定では、なぜそのニーズを満たせないのか？",
    "わかりやすいポイント",
  ].includes(line.trim()))
  .map((line) => {
    const trimmed = line.trim();
    if (trimmed === "新しいタスクの必要性を示すためには、主に次の2要素が必要であると考える。") {
      return "新しいタスクの必要性を示すためには、現実世界にどのような未解決のニーズがあるのか、そして従来の問題設定ではなぜそのニーズを満たせないのかを明確にする必要がある。";
    }
    if (trimmed === "上記の要素に追加で、提案タスクの着想につながった観察や思考過程が記されていると、新規タスクが自然に導かれる問いであることが読者にわかり、”わかりやすさ”につながると考える。") {
      return "さらに、提案タスクの着想につながった観察や思考過程が記されていると、そのタスクが必要性から自然に導かれた問いであることを読者が理解しやすくなる。";
    }
    return line;
  });
const referencesIndex = sourceLines.findIndex((line) => line.trim() === "【参考文献】");
const summaryIndex = sourceLines.findIndex((line) => line.trim() === "・100文字以内のまとめ");
const displayLines = referencesIndex >= 0 && summaryIndex > referencesIndex
  ? [
      ...sourceLines.slice(0, referencesIndex),
      ...sourceLines.slice(summaryIndex),
      ...sourceLines.slice(referencesIndex, summaryIndex),
    ]
  : sourceLines;

displayLines.forEach((part) => {
  const trimmed = part.trim();
  const headingText = majorHeadings.get(trimmed);
  if (headingText) {
    inEvidenceBlock = false;
    inDefinitionBlock = false;
  }
  if (/^1\.\s/.test(trimmed)) inDefinitionBlock = true;
  if (/^[1-5]\.\s/.test(trimmed)) inEvidenceBlock = false;
  if (trimmed === "【根拠】") inEvidenceBlock = true;

  const impactExample = impactExamples.find(({ prefix }) => trimmed.startsWith(prefix));
  if (impactExample) {
    const wrapper = document.createElement("div");
    wrapper.className = "example-entry";
    const title = document.createElement("div");
    title.className = "star-emphasis";
    appendStarEmphasis(title, impactExample.title);
    const description = document.createElement("div");
    description.className = "example-description";
    appendFormattedText(description, trimmed.slice(impactExample.prefix.length));
    wrapper.append(title, description);
    sourceContainer.append(wrapper);
    return;
  }

  const needExample = needExamples.find((prefix) => trimmed.startsWith(prefix));
  if (needExample) {
    const wrapper = document.createElement("div");
    wrapper.className = "example-entry";
    const title = document.createElement("div");
    title.className = "star-emphasis";
    appendStarEmphasis(title, needExample.slice(0, -1));
    const description = document.createElement("div");
    description.className = "example-description";
    appendFormattedText(description, trimmed.slice(needExample.length).trimStart());
    wrapper.append(title, description);
    sourceContainer.append(wrapper);
    return;
  }

  const element = document.createElement(headingText ? "h2" : "div");
  element.className = headingText
    ? "document-heading"
    : "document-line";
  const isStarEmphasis = trimmed.startsWith("*");
  const isPlainBullet =
    trimmed === "* 現実世界にどのような未解決のニーズがあるのか" ||
    trimmed === "* 従来の問題設定では、なぜそのニーズを満たせないのか？";
  if (isStarEmphasis && !isPlainBullet) element.classList.add("star-emphasis");
  if (/^[1-5]\.\s/.test(trimmed)) element.classList.add("definition-heading");
  if (inEvidenceBlock) element.classList.add("evidence-block");
  if (inDefinitionBlock) element.classList.add("definition-block");
  if (trimmed === "【根拠】") element.classList.add("evidence-label");
  if (trimmed === "【参考文献】") element.classList.add("reference-heading");

  const referenceMatch = trimmed.match(/^\[(\d+)\]\s+(.+)$/);
  if (referenceMatch) {
    element.id = `ref-${referenceMatch[1]}`;
    element.classList.add("reference-entry");
    const titleMatch = referenceMatch[2].match(/“([^”]+)”/);
    const query = titleMatch?.[1] ?? referenceMatch[2];
    const link = document.createElement("a");
    link.className = "reference-link";
    link.href = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = normalizeLeadingSpaces(part);
    link.setAttribute("aria-label", `参考文献${referenceMatch[1]}をGoogle Scholarで開く`);
    element.append(link);
  } else if (headingText) {
    element.textContent = headingText;
  } else if (isPlainBullet) {
    element.textContent = `・${trimmed.replace(/^\*\s*/, "")}`;
  } else if (isStarEmphasis) {
    appendStarEmphasis(element, trimmed.replace(/^\*\s*/, ""));
  } else {
    appendFormattedText(element, normalizeLeadingSpaces(part));
  }

  sourceContainer.append(element);
});
