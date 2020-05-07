#include <iostream>
#include <stdlib.h>
#include <limits.h>
using namespace std;

//#define INFINITY INT.MAX  //最大值 无穷
#define INFINITY INT_MAX  //最大值 无穷
#define MAX_VERTEX_NUM 20 //最大顶点个数
typedef char VertexType;  //图的顶点的类型
typedef enum
{
    DG,
    DN,
    UDG,
    UDN
} GraphKind;                  //{有向图，有向网，无向图，无向网}
bool visited[MAX_VERTEX_NUM]; //遍历算法使用的数组
typedef struct
{                                             // 图的定义
    VertexType vexs[MAX_VERTEX_NUM];          // 顶点信息
    int arcs[MAX_VERTEX_NUM][MAX_VERTEX_NUM]; // 弧的信息
    int vexnum, arcnum;                       // 顶点数，弧数
    GraphKind kind;                           // 图的种类标志
} MGraph;

// 在图G的顶点数组中查找顶点V，返回顶点的下标
int LocateVex(MGraph G, VertexType v)
{
    int i;
    for (i = 0; i < G.vexnum; i++)
    {
        if (G.vexs[i] == v)
            return i;
    }
    return -1;
}
//采用邻接矩阵表示法，构造无向网G。
bool CreateUDN(MGraph &G)
{
    int i, j, k;
    int v1, v2, w;
    printf("输入顶点数:");
    scanf("%d", &G.vexnum);
    printf("输入边数:");
    scanf("%d", &G.arcnum);
    //构造顶点
    printf("输入顶点数据:");
    for (i = 0; i < G.vexnum; i++)
    {
        scanf("%d", &G.vexs[i]);
    }
    //初始化邻接矩阵
    for (i = 0; i < G.vexnum; i++)
    {
        for (j = 0; j < G.vexnum; j++)
        {
            G.arcs[i][j] = INFINITY;
        }
    }
}

//显示图G的邻接矩阵,即按行列输出二维数组
void Display(MGraph G)
{
}

//求顶点v在图G中的第一个邻接点
int FirstAdjVex(MGraph G, int v)
{
}
//求顶点v在图G中邻接点w的下一个邻接点
int NextAdjVex(MGraph G, int v, int w)
{
}

// 对图G进行深度优先遍历
void DFSTraverse(MGraph G)
{
}
//从v顶点出发对图G进行深度优先遍历的递归算法
void DFS(MGraph G, int v)
{
}

//对图G进行广度优先遍历
void BFSTraverse(MGraph G)
{
}

int main(void)
{
    MGraph G;
    int c = 0;
    while (c != 5)
    {
        cout << endl
             << "1. 建立无向网的邻接矩阵";
        cout << endl
             << "2. 显示邻接矩阵";
        cout << endl
             << "3. 深度优先遍历序列";
        cout << endl
             << "4. 广度优先遍历序列";
        cout << endl
             << "5. 退出";
        cout << endl
             << "选择功能(1~5):";
        cin >> c;
        switch (c)
        {
        case 1:
            CreateUDN(G);
            break;
        case 2:
            Display(G);
            break;
        case 3:
            DFSTraverse(G);
            break;
        case 4:
            BFSTraverse(G);
            break;
        case 5:
            cout << "结束操作" << endl;
            break;
        }
    }
}